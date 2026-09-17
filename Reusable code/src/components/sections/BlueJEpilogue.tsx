import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import './BlueJEpilogue.css';

// ════════════════════════════════════════════════════════════════
// STATE MACHINE PHASES
// ════════════════════════════════════════════════════════════════
type BlueJState =
  | 'IDLE'
  | 'INTRO_1'          // "Oh, by the way."
  | 'INTRO_2'          // "There was something else I found."
  | 'INTRO_3'          // "Something I made before I knew how much of our story I would eventually remember."
  | 'INTRO_4'          // "Before the websites. Before all this code. Before I knew how to make things like this."
  | 'INTRO_5'          // "I was just a Class 10 kid trying to make something for you."
  | 'BOOT'             // BlueJ IDE window appears
  | 'WORKSPACE'        // Empty workspace ready
  | 'MOVE_TO_NEWCLASS' // Cursor moves to "New Class..."
  | 'DIALOG_OPEN'      // Create Class dialog appears
  | 'TYPE_CLASSNAME'   // Types "Serendipity"
  | 'MOVE_TO_OK'       // Cursor moves to "Ok"
  | 'CLASS_CREATED'    // Serendipity (hatched) appears in workspace
  | 'MOVE_TO_CLASS'    // Cursor moves to Serendipity & double-clicks
  | 'EDITOR_OPEN'      // Source code editor opens
  | 'EDITOR_TYPING'    // Code streams into editor
  | 'EDITOR_DONE'      // Code finished typing
  | 'MOVE_TO_CLOSE'    // Cursor moves to "Close" button
  | 'EDITOR_CLOSED'    // Editor closes, returning to workspace
  | 'MOVE_TO_COMPILE'  // Cursor moves to "Compile" button
  | 'COMPILING'        // Status: Compiling...
  | 'COMPILED'         // Status: Code compiled — no syntax errors. Class turns solid.
  | 'RIGHT_CLICK'      // Cursor right-clicks class box
  | 'CONTEXT_MENU'     // Context menu appears
  | 'MOVE_TO_VOIDMAIN' // Cursor hovers "void main(String[] args)"
  | 'RUN_CLICK'        // Clicks void main
  | 'TERMINAL_OPEN'    // BlueJ Terminal Window opens
  | 'TERMINAL_TYPING'  // Output types out: birthday message + panda ASCII
  | 'TERMINAL_DONE'    // Output complete
  | 'CODA_1'           // "You probably remember him."
  | 'CODA_2';          // "I guess I never really stopped making things for you."

// ════════════════════════════════════════════════════════════════
// EXACT JAVA CODE — Class 10 Serendipity program
// ════════════════════════════════════════════════════════════════
const JAVA_LINES = [
  "public class Serendipity {",
  "",
  "    public static void main(String[] args) {",
  "        // Message 1: Birthday wish",
  "        int[] message1 = {",
  "            72, 97, 112, 112, 121, 32, 66, 105, 114, 116, 104, 100, 97, 121, 32, 65, 110, 117, 115, 104, 107, 97, 33, 33, 32,",
  "            73, 32, 119, 97, 110, 116, 101, 100, 32, 116, 111, 32, 116, 97, 107, 101, 32, 97, 32, 109, 111, 109, 101, 110, 116,",
  "            32, 116, 111, 32, 114, 101, 109, 105, 110, 100, 32, 121, 111, 117, 32, 111, 102, 32, 104, 111, 119, 32, 109, 117,",
  "            99, 104, 32, 121, 111, 117, 114, 32, 102, 114, 105, 101, 110, 100, 115, 104, 105, 112, 32, 109, 101, 97, 110, 115,",
  "            32, 116, 111, 32, 109, 101, 46, 32, 87, 101, 39, 118, 101, 32, 115, 104, 97, 114, 101, 100, 32, 115, 111, 32, 109,",
  "            97, 110, 121, 32, 109, 101, 109, 111, 114, 105, 101, 115, 44, 32, 108, 105, 107, 101, 32, 111, 117, 114, 32, 116,",
  "            105, 109, 101, 32, 97, 116, 32, 116, 104, 101, 32, 113, 117, 105, 122, 32, 99, 111, 109, 112, 101, 116, 105, 116,",
  "            105, 111, 110, 44, 32, 97, 110, 100, 32, 116, 104, 111, 115, 101, 32, 109, 111, 109, 101, 110, 116, 115, 32, 104,",
  "            97, 118, 101, 32, 98, 101, 101, 110, 32, 116, 114, 117, 108, 121, 32, 115, 112, 101, 99, 105, 97, 108, 46, 32,",
  "            69, 118, 101, 110, 32, 116, 104, 111, 117, 103, 104, 32, 119, 101, 32, 104, 97, 118, 101, 32, 110, 39, 116, 32,",
  "            98, 101, 101, 110, 32, 105, 110, 32, 116, 111, 117, 99, 104, 32, 97, 115, 32, 109, 117, 99, 104, 32, 108, 97,",
  "            116, 101, 108, 121, 44, 32, 73, 32, 104, 111, 112, 101, 32, 121, 111, 117, 39, 114, 101, 32, 100, 111, 105, 110,",
  "            103, 32, 119, 101, 108, 108, 32, 97, 110, 100, 32, 116, 104, 97, 116, 32, 108, 105, 102, 101, 32, 105, 115, 32,",
  "            116, 114, 101, 97, 116, 105, 110, 103, 32, 121, 111, 117, 32, 107, 105, 110, 100, 108, 121, 46, 32, 72, 101, 114,",
  "            101, 39, 115, 32, 116, 111, 32, 99, 101, 108, 101, 98, 114, 97, 116, 105, 110, 103, 32, 121, 111, 117, 32, 116,",
  "            111, 100, 97, 121, 32, 97, 110, 100, 32, 119, 105, 115, 104, 105, 110, 103, 32, 121, 111, 117, 32, 97, 108, 108,",
  "            32, 116, 104, 101, 32, 104, 97, 112, 112, 105, 110, 101, 115, 115, 32, 105, 110, 32, 116, 104, 101, 32, 119, 111,",
  "            114, 108, 100, 32, 102, 111, 114, 32, 116, 104, 101, 32, 121, 101, 97, 114, 32, 97, 104, 101, 97, 100, 33",
  "        };",
  "",
  "        for (int i : message1) System.out.print((char) i);",
  "",
  "        // Message 2: Title",
  "        int[] message2 = { 65, 32, 76, 105, 116, 116, 108, 101, 32, 83, 111, 109, 101, 116, 104, 105, 110, 103, 32, 102, 111, 114, 32, 89, 111, 117, 58, 10 };",
  "        for (int i : message2) System.out.print((char) i);",
  "",
  "        printPanda();",
  "        printPandaComment();",
  "    }",
  "",
  "    private static void printPanda() {",
  "        String[] panda = {",
  "            \"   _____   \",",
  "            \"  / o o \\\\  \",",
  "            \" (   \\\"   ) \",",
  "            \"  \\\\~(*)~/  \",",
  "            \"   \\\\~_~/   \",",
  "            \"    | |    \",",
  "            \"   (___)   \"",
  "        };",
  "        for (String line : panda) System.out.println(line);",
  "    }",
  "",
  "    private static void printPandaComment() {",
  "        int[] comment = { 84, 104, 97, 116, 39, 115, 32, 115, 117, 112, 112, 111, 115, 101, 32, 116, 111, 32, 98, 101, 32, 97, 32, 112, 97, 110, 100, 97, 32, 108, 111, 108, 32, 108, 111, 108, 33, 10 };",
  "        for (int i : comment) System.out.print((char) i);",
  "    }",
  "}"
];

// Predetermined terminal output
const TERMINAL_OUTPUT_LINES = [
  "Happy Birthday Anushka!! I wanted to take a moment to remind you of how much your friendship means to me. We've shared so many memories, like our time at the quiz competition, and those moments have been truly special. Even though we haven't been in touch as much lately, I hope you're doing well and that life is treating you kindly. Here's to celebrating you today and wishing you all the happiness in the world for the year ahead!",
  "",
  "A Little Something for You:",
  "",
  "   _____   ",
  "  / o o \\  ",
  " (   \"   ) ",
  "  \\~(*)~/  ",
  "   \\~_~/   ",
  "    | |    ",
  "   (___)   ",
  "",
  "That's suppose to be a panda lol lol!"
];

// ════════════════════════════════════════════════════════════════
// SIMULATED MOUSE CURSOR
// ════════════════════════════════════════════════════════════════
interface CursorPos { x: number; y: number }

const SimCursor: React.FC<{ pos: CursorPos; visible: boolean; clicking: boolean }> = ({ pos, visible, clicking }) => {
  if (!visible) return null;
  return (
    <div
      className="bluej-sim-cursor"
      style={{
        left: pos.x,
        top: pos.y,
        transform: clicking ? 'scale(0.82)' : 'scale(1)',
      }}
    >
      <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
        <path
          d="M1 1L1 19L5.5 14.5L9.5 22L12.5 20.5L8.5 12.5L14 12.5L1 1Z"
          fill="white"
          stroke="#111"
          strokeWidth="1.4"
        />
      </svg>
    </div>
  );
};

// ════════════════════════════════════════════════════════════════
// MAIN EPILOGUE COMPONENT
// ════════════════════════════════════════════════════════════════
export const BlueJEpilogue: React.FC = () => {
  const [phase, setPhase] = useState<BlueJState>('IDLE');
  const [cursorPos, setCursorPos] = useState<CursorPos>({ x: 160, y: 140 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorClicking, setCursorClicking] = useState(false);
  const [classNameTyped, setClassNameTyped] = useState('');
  const [typedLineCount, setTypedLineCount] = useState(0);
  const [statusText, setStatusText] = useState('');
  const [highlightVoidMain, setHighlightVoidMain] = useState(false);
  const [terminalLineCount, setTerminalLineCount] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const editorBodyRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<number[]>([]);

  const addTimer = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  // Visual sub-component visibility flags
  const showIntro1 = phase !== 'IDLE';
  const showIntro2 = !['IDLE', 'INTRO_1'].includes(phase);
  const showIntro3 = !['IDLE', 'INTRO_1', 'INTRO_2'].includes(phase);
  const showIntro4 = !['IDLE', 'INTRO_1', 'INTRO_2', 'INTRO_3'].includes(phase);
  const showIntro5 = !['IDLE', 'INTRO_1', 'INTRO_2', 'INTRO_3', 'INTRO_4'].includes(phase);

  const showBlueJ = ![
    'IDLE',
    'INTRO_1',
    'INTRO_2',
    'INTRO_3',
    'INTRO_4',
    'INTRO_5',
  ].includes(phase);

  const showDialog = [
    'DIALOG_OPEN',
    'TYPE_CLASSNAME',
    'MOVE_TO_OK',
  ].includes(phase);

  const hasClass = ![
    'IDLE',
    'INTRO_1',
    'INTRO_2',
    'INTRO_3',
    'INTRO_4',
    'INTRO_5',
    'BOOT',
    'WORKSPACE',
    'MOVE_TO_NEWCLASS',
    'DIALOG_OPEN',
    'TYPE_CLASSNAME',
    'MOVE_TO_OK',
  ].includes(phase);

  const showEditor = [
    'EDITOR_OPEN',
    'EDITOR_TYPING',
    'EDITOR_DONE',
    'MOVE_TO_CLOSE',
  ].includes(phase);

  const isCompiled = [
    'COMPILED',
    'RIGHT_CLICK',
    'CONTEXT_MENU',
    'MOVE_TO_VOIDMAIN',
    'RUN_CLICK',
    'TERMINAL_OPEN',
    'TERMINAL_TYPING',
    'TERMINAL_DONE',
    'CODA_1',
    'CODA_2',
  ].includes(phase);

  const showContextMenu = [
    'CONTEXT_MENU',
    'MOVE_TO_VOIDMAIN',
  ].includes(phase);

  const showTerminal = [
    'TERMINAL_OPEN',
    'TERMINAL_TYPING',
    'TERMINAL_DONE',
    'CODA_1',
    'CODA_2',
  ].includes(phase);

  const showCoda1 = ['CODA_1', 'CODA_2'].includes(phase);
  const showCoda2 = phase === 'CODA_2';

  // ─── Trigger on scroll entry ──────────────────────────────
  useEffect(() => {
    if (phase !== 'IDLE') return;
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase('INTRO_1');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [phase]);

  // ─── Auto-scroll to BlueJ window when it boots ────────────
  useEffect(() => {
    if (showBlueJ) {
      const timer = window.setTimeout(() => {
        containerRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [showBlueJ]);

  // ─── Smooth cursor movement ───────────────────────────────
  const moveCursor = useCallback(
    (targetX: number, targetY: number): Promise<void> => {
      return new Promise((resolve) => {
        setCursorPos({ x: targetX, y: targetY });
        addTimer(resolve, 520);
      });
    },
    [addTimer]
  );

  const clickCursor = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      setCursorClicking(true);
      addTimer(() => {
        setCursorClicking(false);
        addTimer(resolve, 140);
      }, 160);
    });
  }, [addTimer]);

  // ─── STATE MACHINE CHOREOGRAPHY ────────────────────────────
  useEffect(() => {
    switch (phase) {
      case 'INTRO_1':
        // Show "Oh, by the way."
        addTimer(() => setPhase('INTRO_2'), 2800);
        break;

      case 'INTRO_2':
        // Show "There was something else I found."
        addTimer(() => setPhase('INTRO_3'), 2800);
        break;

      case 'INTRO_3':
        // Show "Something I made before I knew how much of our story I would eventually remember."
        addTimer(() => setPhase('INTRO_4'), 3600);
        break;

      case 'INTRO_4':
        // Show "Before the websites. Before all this code. Before I knew how to make things like this."
        addTimer(() => setPhase('INTRO_5'), 3600);
        break;

      case 'INTRO_5':
        // Show "I was just a Class 10 kid trying to make something for you."
        // Hold for 3.8s so the realization lands, then boot BlueJ
        addTimer(() => setPhase('BOOT'), 3800);
        break;

      case 'BOOT':
        // BlueJ window fades in
        addTimer(() => {
          setCursorVisible(true);
          setPhase('WORKSPACE');
        }, 1100);
        break;

      case 'WORKSPACE':
        // Cursor ready on canvas
        addTimer(() => setPhase('MOVE_TO_NEWCLASS'), 650);
        break;

      case 'MOVE_TO_NEWCLASS':
        // Move to "New Class..." button on left toolbar
        moveCursor(48, 72).then(() => {
          clickCursor().then(() => {
            setPhase('DIALOG_OPEN');
          });
        });
        break;

      case 'DIALOG_OPEN':
        // Dialog opens, move cursor into class name text field
        addTimer(() => {
          moveCursor(200, 160).then(() => {
            clickCursor().then(() => {
              setPhase('TYPE_CLASSNAME');
            });
          });
        }, 300);
        break;

      case 'TYPE_CLASSNAME': {
        // Natural typing of "Serendipity"
        const name = 'Serendipity';
        let i = 0;
        const typeChar = () => {
          if (i <= name.length) {
            setClassNameTyped(name.slice(0, i));
            i++;
            addTimer(typeChar, 75 + Math.random() * 40);
          } else {
            addTimer(() => setPhase('MOVE_TO_OK'), 300);
          }
        };
        typeChar();
        break;
      }

      case 'MOVE_TO_OK':
        // Move to dialog "Ok" button
        moveCursor(215, 310).then(() => {
          clickCursor().then(() => {
            setPhase('CLASS_CREATED');
          });
        });
        break;

      case 'CLASS_CREATED':
        // Serendipity box appears hatched in workspace
        addTimer(() => setPhase('MOVE_TO_CLASS'), 500);
        break;

      case 'MOVE_TO_CLASS':
        // Move to class box and double click
        moveCursor(150, 115).then(() => {
          clickCursor().then(() => {
            addTimer(() => {
              clickCursor().then(() => {
                setPhase('EDITOR_OPEN');
              });
            }, 100);
          });
        });
        break;

      case 'EDITOR_OPEN':
        // Editor window opens over workspace
        addTimer(() => setPhase('EDITOR_TYPING'), 500);
        break;

      case 'EDITOR_TYPING': {
        // Stream lines into editor cleanly at 60fps
        let currentLine = 0;
        const streamNextLine = () => {
          if (currentLine < JAVA_LINES.length) {
            currentLine++;
            setTypedLineCount(currentLine);

            if (editorBodyRef.current) {
              const el = editorBodyRef.current;
              // Smoothly follow the active writing line without scrolling past into blank space
              const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
              if (maxScroll > 0) {
                el.scrollTop = Math.min(maxScroll, Math.max(0, currentLine * 15 - 140));
              }
            }

            // Pacing: structure lines have slight pauses, data arrays stream briskly
            const text = JAVA_LINES[currentLine - 1] || '';
            let lineDelay = 140;
            if (text.includes('public') || text.includes('void') || text.includes('printPanda')) {
              lineDelay = 220;
            } else if (text.trim().startsWith('{') || text.trim().startsWith('}')) {
              lineDelay = 80;
            } else if (/\d/.test(text)) {
              lineDelay = 100;
            }

            addTimer(streamNextLine, lineDelay);
          } else {
            addTimer(() => setPhase('EDITOR_DONE'), 500);
          }
        };
        streamNextLine();
        break;
      }

      case 'EDITOR_DONE':
        // Smoothly scroll back to the top of the editor so the entire program is fully visible and readable!
        if (editorBodyRef.current) {
          editorBodyRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Let the user view the complete program before moving to Close
        addTimer(() => setPhase('MOVE_TO_CLOSE'), 1800);
        break;

      case 'MOVE_TO_CLOSE':
        // Move cursor to "Close" button on editor toolbar
        moveCursor(340, 88).then(() => {
          clickCursor().then(() => {
            setPhase('EDITOR_CLOSED');
          });
        });
        break;

      case 'EDITOR_CLOSED':
        // Editor closes, back to workspace
        addTimer(() => setPhase('MOVE_TO_COMPILE'), 450);
        break;

      case 'MOVE_TO_COMPILE':
        // Move cursor to "Compile" button on left toolbar
        moveCursor(48, 172).then(() => {
          clickCursor().then(() => {
            setPhase('COMPILING');
          });
        });
        break;

      case 'COMPILING':
        setStatusText('Compiling...');
        addTimer(() => {
          setStatusText('Code compiled — no syntax errors.');
          setPhase('COMPILED');
        }, 1300);
        break;

      case 'COMPILED':
        // Class turns solid (compiled)
        addTimer(() => setPhase('RIGHT_CLICK'), 650);
        break;

      case 'RIGHT_CLICK':
        // Move cursor to Serendipity and right click
        moveCursor(150, 115).then(() => {
          clickCursor().then(() => {
            setPhase('CONTEXT_MENU');
          });
        });
        break;

      case 'CONTEXT_MENU':
        // Context menu appears next to class box
        addTimer(() => setPhase('MOVE_TO_VOIDMAIN'), 450);
        break;

      case 'MOVE_TO_VOIDMAIN':
        // Move cursor to "void main(String[] args)"
        moveCursor(285, 142).then(() => {
          setHighlightVoidMain(true);
          addTimer(() => setPhase('RUN_CLICK'), 350);
        });
        break;

      case 'RUN_CLICK':
        clickCursor().then(() => {
          setPhase('TERMINAL_OPEN');
        });
        break;

      case 'TERMINAL_OPEN':
        // Terminal window opens
        addTimer(() => setPhase('TERMINAL_TYPING'), 500);
        break;

      case 'TERMINAL_TYPING': {
        // Stream terminal output with emotional pacing
        let termIdx = 0;
        const streamTermLine = () => {
          if (termIdx < TERMINAL_OUTPUT_LINES.length) {
            termIdx++;
            setTerminalLineCount(termIdx);
            if (terminalBodyRef.current) {
              terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
            }
            const line = TERMINAL_OUTPUT_LINES[termIdx - 1] || '';

            // Pacing:
            // 1. Long birthday wish line: deliberate reading pace (850ms)
            // 2. Completed ASCII panda line ("   (___)   "):
            //    DRAMATIC PAUSE of 2800ms! Let her look at the panda and remember on her own!
            // 3. Section header: gentle pause
            // 4. Regular lines: 180ms
            let delay = 180;
            if (line.length > 50) {
              delay = 850;
            } else if (line.includes('(___)')) {
              // The dramatic hold on the completed panda before the comment line
              delay = 2800;
            } else if (line.includes('A Little Something')) {
              delay = 600;
            }

            addTimer(streamTermLine, delay);
          } else {
            setCursorVisible(false);
            addTimer(() => setPhase('TERMINAL_DONE'), 600);
          }
        };
        streamTermLine();
        break;
      }

      case 'TERMINAL_DONE':
        // Terminal output complete, sit in quiet stillness for 2.2s before the first coda reflection
        addTimer(() => setPhase('CODA_1'), 2200);
        break;

      case 'CODA_1':
        // "You probably remember him." fades in, lingers for 3.2s
        addTimer(() => setPhase('CODA_2'), 3200);
        break;

      case 'CODA_2':
        // "I guess I never really stopped making things for you." settles in permanently
        break;

      default:
        break;
    }
  }, [phase, moveCursor, clickCursor, addTimer]);

  const visibleJavaCode = JAVA_LINES.slice(0, typedLineCount).join('\n');
  const visibleTerminalOutput = TERMINAL_OUTPUT_LINES.slice(0, terminalLineCount).join('\n');

  return (
    <section id="bluej-epilogue" ref={sectionRef} className="bluej-epilogue-section">
      {/* ── Emotional Prelude in the Quiet Dark ── */}
      <div className="bluej-intro-text">
        <motion.p
          initial={{ opacity: 0 }}
          animate={showIntro1 ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 1.8 }}
          className="font-serif text-xl md:text-2xl text-paper/70 italic"
        >
          Oh, by the way.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={showIntro2 ? { opacity: 0.55 } : { opacity: 0 }}
          transition={{ duration: 2 }}
          className="font-serif text-base md:text-lg text-paper/50 italic mt-8"
        >
          There was something else I found.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={showIntro3 ? { opacity: 0.5 } : { opacity: 0 }}
          transition={{ duration: 2.2 }}
          className="font-serif text-base md:text-lg text-paper/45 italic mt-6 max-w-lg mx-auto leading-relaxed"
        >
          Something I made before I knew how much of our story I would eventually remember.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={showIntro4 ? { opacity: 0.45 } : { opacity: 0 }}
          transition={{ duration: 2.2 }}
          className="font-serif text-sm md:text-base text-paper/40 italic mt-8 space-y-1.5"
        >
          <p>Before the websites.</p>
          <p>Before all this code.</p>
          <p>Before I knew how to make things like this.</p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={showIntro5 ? { opacity: 0.7 } : { opacity: 0 }}
          transition={{ duration: 2.4 }}
          className="font-serif text-base md:text-lg text-paper/70 italic mt-8"
        >
          I was just a Class 10 kid trying to make something for you.
        </motion.p>
      </div>

      {/* ── BlueJ IDE Desktop Container ── */}
      {showBlueJ && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="bluej-container"
        >
          {/* Layer 0: Main Workspace — Permanent desktop background */}
          <div className="bluej-window">
            {/* Titlebar */}
            <div className="bluej-titlebar">
              <div className="bluej-titlebar-icon">
                <div className="bluej-diamond" />
              </div>
              <span className="bluej-titlebar-text">BlueJ: Serendipity</span>
              <div className="bluej-titlebar-controls">
                <div className="bluej-ctrl bluej-ctrl-min">─</div>
                <div className="bluej-ctrl bluej-ctrl-max">□</div>
                <div className="bluej-ctrl bluej-ctrl-close">✕</div>
              </div>
            </div>

            {/* Menu bar */}
            <div className="bluej-menubar">
              <span>Project</span>
              <span>Edit</span>
              <span>Tools</span>
              <span>View</span>
              <span>Help</span>
            </div>

            {/* Body */}
            <div className="bluej-body">
              {/* Left Toolbar */}
              <div className="bluej-toolbar">
                <button className="bluej-toolbar-btn">New Class...</button>
                <button className="bluej-toolbar-btn bluej-arrow-btn" tabIndex={-1}>
                  <span className="bluej-arrow-dashed">---→</span>
                </button>
                <button className="bluej-toolbar-btn bluej-arrow-btn" tabIndex={-1}>
                  <span className="bluej-arrow-solid">──→</span>
                </button>
                <button className="bluej-toolbar-btn">Compile</button>
              </div>

              {/* Canvas */}
              <div className="bluej-canvas">
                {/* Readme / package paper icon top-left */}
                <div className="bluej-package-icon">
                  <div className="bluej-package-page" />
                </div>

                {/* Serendipity Class Box */}
                {hasClass && (
                  <div className={`bluej-class-box ${isCompiled ? 'bluej-class-compiled' : 'bluej-class-hatched'}`}>
                    <div className="bluej-class-label">Serendipity</div>
                    <div className="bluej-class-body" />
                  </div>
                )}
              </div>

              {/* Bottom bench tray */}
              <div className="bluej-object-bench" />
            </div>

            {/* Status bar */}
            <div className="bluej-statusbar">
              <span>{statusText}</span>
            </div>
          </div>

          {/* Layer 1: Create Class Dialog Modal */}
          {showDialog && (
            <div className="bluej-dialog-overlay">
              <div className="bluej-dialog">
                <div className="bluej-dialog-titlebar">
                  <div className="bluej-diamond-sm" />
                  <span>BlueJ: Create New Class</span>
                  <div className="bluej-ctrl bluej-ctrl-close bluej-ctrl-sm">✕</div>
                </div>
                <div className="bluej-dialog-body">
                  <div className="bluej-dialog-label">Class Name:</div>
                  <div className="bluej-dialog-input">
                    <span>{classNameTyped}</span>
                    <span className="bluej-text-cursor">|</span>
                  </div>

                  <div className="bluej-dialog-label" style={{ marginTop: 12 }}>
                    Class Type
                  </div>
                  <div className="bluej-radio-group">
                    <label>
                      <input type="radio" checked readOnly /> Class
                    </label>
                    <label>
                      <input type="radio" disabled /> Abstract Class
                    </label>
                    <label>
                      <input type="radio" disabled /> Interface
                    </label>
                    <label>
                      <input type="radio" disabled /> Applet
                    </label>
                    <label>
                      <input type="radio" disabled /> Unit Test
                    </label>
                    <label>
                      <input type="radio" disabled /> Enum
                    </label>
                  </div>

                  <div className="bluej-dialog-buttons">
                    <button className="bluej-btn-ok">Ok</button>
                    <button className="bluej-btn-cancel" tabIndex={-1}>Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layer 2: Code Editor Window */}
          {showEditor && (
            <div className="bluej-editor-window">
              <div className="bluej-titlebar">
                <div className="bluej-titlebar-icon">
                  <div className="bluej-diamond" />
                </div>
                <span className="bluej-titlebar-text">BlueJ: Serendipity editor</span>
                <div className="bluej-titlebar-controls">
                  <div className="bluej-ctrl bluej-ctrl-min">─</div>
                  <div className="bluej-ctrl bluej-ctrl-max">□</div>
                  <div className="bluej-ctrl bluej-ctrl-close">✕</div>
                </div>
              </div>

              <div className="bluej-editor-menubar">
                <span>Class</span>
                <span>Edit</span>
                <span>Tools</span>
                <span>Options</span>
              </div>

              <div className="bluej-editor-tab">
                <span className="bluej-editor-tab-label">Serendipity ✕</span>
              </div>

              <div className="bluej-editor-toolbar">
                <button className="bluej-editor-tbtn" tabIndex={-1}>Compile</button>
                <button className="bluej-editor-tbtn" tabIndex={-1}>Undo</button>
                <button className="bluej-editor-tbtn" tabIndex={-1}>Cut</button>
                <button className="bluej-editor-tbtn" tabIndex={-1}>Copy</button>
                <button className="bluej-editor-tbtn" tabIndex={-1}>Paste</button>
                <button className="bluej-editor-tbtn" tabIndex={-1}>Find...</button>
                <button className="bluej-editor-tbtn bluej-editor-close-btn">Close</button>
              </div>

              <div className="bluej-editor-body" ref={editorBodyRef}>
                {/* Authentic BlueJ left margin indicator */}
                <div className="bluej-editor-margin" />

                {/* Code Content */}
                <div className="bluej-editor-code">
                  <div className="bluej-javadoc-box">
                    <pre className="bluej-javadoc-text">
{`/**
 * Write a description of class Serendipity here.
 * 
 * @author Rishav (Class 10)
 * @version 2024
 */`}
                    </pre>
                  </div>

                  <pre className="bluej-code-pre">
                    {colorizeSimpleJava(visibleJavaCode)}
                    <span className="bluej-text-cursor">|</span>
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* Layer 3: Context Menu */}
          {showContextMenu && (
            <div className="bluej-context-menu" style={{ left: 215, top: 85 }}>
              <div className="bluej-ctx-item">new Serendipity()</div>
              <div className={`bluej-ctx-item ${highlightVoidMain ? 'bluej-ctx-highlight' : ''}`}>
                void main(String[] args)
              </div>
              <div className="bluej-ctx-separator" />
              <div className="bluej-ctx-item bluej-ctx-red">Open Editor</div>
              <div className="bluej-ctx-item bluej-ctx-red">Compile</div>
              <div className="bluej-ctx-item bluej-ctx-red">Inspect</div>
              <div className="bluej-ctx-item bluej-ctx-red">Remove</div>
            </div>
          )}

          {/* Layer 4: Output Terminal Window */}
          {showTerminal && (
            <div className="bluej-terminal-window">
              <div className="bluej-titlebar">
                <div className="bluej-titlebar-icon">
                  <div className="bluej-diamond" />
                </div>
                <span className="bluej-titlebar-text">BlueJ: Terminal Window - Serendipity</span>
                <div className="bluej-titlebar-controls">
                  <div className="bluej-ctrl bluej-ctrl-min">─</div>
                  <div className="bluej-ctrl bluej-ctrl-max">□</div>
                  <div className="bluej-ctrl bluej-ctrl-close">✕</div>
                </div>
              </div>

              <div className="bluej-terminal-menubar">
                <span>Options</span>
              </div>

              <div className="bluej-terminal-body" ref={terminalBodyRef}>
                <pre className="bluej-terminal-text">
                  {visibleTerminalOutput}
                  <span className="bluej-text-cursor">_</span>
                </pre>
              </div>
            </div>
          )}

          {/* Layer 5: Simulated Mouse Cursor */}
          <SimCursor pos={cursorPos} visible={cursorVisible} clicking={cursorClicking} />
        </motion.div>
      )}

      {/* ── Post-output quiet reflection ─────────────────── */}
      <div className="bluej-coda">
        {showCoda1 && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.55, y: 0 }}
            transition={{ duration: 2 }}
            className="font-serif text-sm md:text-base text-paper/55 italic"
          >
            You probably remember him.
          </motion.p>
        )}

        {showCoda2 && (
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 2.8 }}
            className="font-serif text-base md:text-lg text-paper/80 italic mt-6"
          >
            I guess I never really stopped making things for you.
          </motion.p>
        )}
      </div>

      {/* Trailing stillness */}
      <div className="h-[35vh]" />
    </section>
  );
};

// Fast, non-blocking syntax colorizer
function colorizeSimpleJava(code: string): React.ReactNode {
  if (!code) return null;
  const keywords = ['public', 'class', 'static', 'void', 'int', 'for', 'private', 'new', 'String'];
  const lines = code.split('\n');

  return lines.map((line, li) => {
    const tokens = line.split(/(\b(?:public|class|static|void|int|for|private|new|String)\b|"[^"]*"|\/\/.*$)/g);
    const parts = tokens.map((token, ti) => {
      if (keywords.includes(token)) {
        return <span key={`${li}-${ti}`} className="bluej-kw">{token}</span>;
      }
      if (token.startsWith('"')) {
        return <span key={`${li}-${ti}`} className="bluej-str">{token}</span>;
      }
      if (token.startsWith('//')) {
        return <span key={`${li}-${ti}`} className="bluej-comment">{token}</span>;
      }
      return <span key={`${li}-${ti}`}>{token}</span>;
    });

    return (
      <React.Fragment key={li}>
        {parts}
        {li < lines.length - 1 && '\n'}
      </React.Fragment>
    );
  });
}
