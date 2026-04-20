// ============================================================
//  portfolio-data.js — Single source of truth for both themes
//  Edit content HERE. Both index.html and index-clean.html
//  read from this file and render with their own styling.
// ============================================================

const PORTFOLIO = {

  // ======================== CONTACT ========================
  contact: {
    email: 'rohitnm99@gmail.com',
    github: 'https://github.com/rohitnm',
    githubDisplay: 'github.com/rohitnm',
    linkedin: 'https://linkedin.com/in/rohitnm',
    linkedinDisplay: 'linkedin.com/in/rohitnm',
  },

  // ======================== COMPETENCIES ========================
  // Dark theme only (competencies strip)
  competencies: [
    'Bare Metal & RTOS',
    'Embedded Architecture',
    'Safety-Critical Systems',
    'OTA Firmware',
    'JTAG / GDB Debugging',
    'Sensor Integration',
    'Control Systems',
    'Testing & Validation',
  ],

  // ======================== METRICS ========================
  // Dark theme only (cycling metrics banner)
  metrics: [
    { number: '3+',     label: 'Years of Professional Experience',     context: 'Firmware & Embedded Systems' },
    { number: '11',     label: 'Projects Built',                       context: 'Robotics and Embedded Systems' },
    { number: '\u221E', label: 'Curiosity Level',                      context: 'Always Learning' },
    { number: '100%',   label: "Chance I'll Read Documentation",       context: 'Before Asking Questions' },
    { number: '115200', label: 'Baud Rate of Choice',                  context: 'The Classic' },
    { number: '20th',   label: 'Global \u2014 MITRE eCTF',            context: 'Team Virginia Tech' },
    { number: '1024',   label: 'Coffee Cups Every Year',               context: 'Fuel for Life' },
    { number: '3rd',    label: 'All India Rank \u2014 ROBOCON 2018',   context: '108+ Teams Nationally' },
    { number: '5th',    label: 'All India Rank \u2014 ROBOCON 2020',   context: '94+ Teams Nationally' },
    { number: '8th',    label: 'All India Rank \u2014 ROBOCON 2021',   context: '114+ Teams Nationally' },
    { number: '3.2',    label: 'Undergraduate GPA',                    context: 'University of Mumbai' },
    { number: '3.75',   label: 'Graduate GPA',                         context: 'Virginia Tech \u2014 M.S. CompE' },
    { number: '5+',     label: 'Communication Protocols',              context: 'UART \u2022 SPI \u2022 I2C \u2022 CAN \u2022 JTAG' },
    { number: '7+',     label: 'Microcontroller Families',             context: 'STM32 \u2022 MSP432 \u2022 MAX78000 \u2022 Renesas \u2022 8051 \u2022 AVR \u2022 RPi' },
    { number: '6',      label: 'Programming Languages',                context: 'C \u2022 C++ \u2022 Python \u2022 C# \u2022 Bash \u2022 Assembly' },
    { number: '7+',     label: 'IDEs & Toolchains',                    context: 'STM32CubeIDE \u2022 IAR \u2022 CCS \u2022 MPLab \u2022 VS Code' },
    { number: '1',      label: 'VS Code Marketplace Extension',        context: 'SVD Register Tuner' },
    { number: '10+',    label: 'Sensor Types Integrated',              context: 'LIDAR \u2022 Camera \u2022 Ultrasonic \u2022 IMU \u2022 Encoders' },
    { number: '4',      label: 'Years on Robotics Team',               context: 'K.J. Somaiya 2017\u20132021' },
    { number: '5',      label: 'States Lived In',                      context: 'MH, IND \u2192 VA \u2192 MA \u2192 SC \u2192 NC' },
    { number: '4/5',    label: 'Spice Tolerance',                      context: 'Raised in Mumbai' },
    { number: '500+',   label: 'Hours of PS5 Gameplay Logged',         context: 'Recharge Time' },
    { number: '30+',    label: 'Games in Backlog',                     context: 'Will Finish Eventually' },
    { number: '5',      label: 'Languages Spoken',                     context: 'English \u2022 Hindi \u2022 Gujarati \u2022 Marathi \u2022 Spanish' },
  ],

  // ======================== EXPERIENCE ========================
  experience: [
    {
      company: 'Baxter International',
      companyFull: 'Baxter International \u2014 LER TechForce LLC',
      date: 'Apr 2025 \u2013 Present',
      role: 'Embedded Software Engineer',
      location: 'Raleigh, NC',
      current: true,
      bullets: [
        {
          text: 'Improving OTA firmware upgrade reliability for a medical bed platform, supporting increase in success rate from <strong>90% toward 95%</strong> via dual-bank flash restructuring and CRC-checkpoint gating.',
          expandable: true,
          detailId: 'ota-detail',
          detail: 'Dual-bank flash \u2014 Bank A runs active firmware while Bank B receives the new image. On completion, a bank-swap flag is written and the device reboots into the updated bank. On slower eMMC parts, the write phase could exceed the watchdog window, causing the device to reset mid-swap and fall back to the old image. The fix restructures writes to feed the watchdog between 4KB blocks and adds a CRC checkpoint before committing the swap flag, ensuring an interrupted update never leaves the device half-flashed.',
        },
        {
          text: 'Architected cross-OS firmware logging using custom RPCA commands across Yocto Linux and RTOS, adding <strong>20+ log points</strong> and reducing debugging time by <strong>50%</strong>.',
          expandable: true,
          detailId: 'logging-detail',
          detail: 'Built a unified logging bridge that routes diagnostics from the RTOS core through custom RPCA commands to the Linux side, where they\u2019re timestamped and persisted. Covers boot, OTA, peripheral init, and error paths across both OSes.',
        },
        {
          text: 'Developed a single encrypted firmware upgrade package by modifying Bash scripts, improving deployment reliability and security.',
        },
        {
          text: 'Built and sourced Yocto-based SDK environments for ARM targets, enabling cross-compilation and embedded Linux development.',
        },
      ],
    },
    {
      company: 'Itron, Inc.',
      date: 'Jul 2024 \u2013 Apr 2025',
      role: 'Firmware Engineer',
      location: 'West Union, SC',
      bullets: [
        {
          text: 'Designed an automated power cycling and failure monitoring system for NICs, enabling <strong>400+ hours</strong> of continuous testing and improving failure detection by <strong>150%</strong>.',
        },
        {
          text: 'Developed a Python library to monitor Wi-Fi failures during Linux boot-up, integrating logic analyzers and oscilloscopes, cutting log analysis time by <strong>98%</strong>.',
        },
        {
          text: 'Addressed QSPI NAND firmware flashing failures by modifying code to bypass bad blocks for successful deployment.',
        },
      ],
    },
    {
      company: 'Virginia Tech \u2014 ECE Department',
      date: 'Jan 2024 \u2013 May 2024',
      role: 'Graduate Teaching Assistant \u2014 ECE 2564 Embedded Systems',
      roleShort: 'GTA \u2014 ECE 2564 Embedded Systems',
      location: 'Blacksburg, VA',
      academic: true,
      bullets: [
        {
          text: 'Guided students through embedded systems assignments, debugging code on MSP432 and helping them reason through interrupts, timers, and peripheral drivers.',
        },
        {
          text: 'Graded assignments and projects for <strong>78 students</strong>, providing constructive feedback on firmware design and coding practices.',
        },
      ],
    },
    {
      company: 'Third Pole Therapeutics',
      date: 'Sep 2023 \u2013 Dec 2023',
      role: 'Embedded Software Engineering Intern',
      location: 'Waltham, MA',
      bullets: [
        {
          text: 'Developed a prototype UART-based CLI on Renesas SK-S7G2, streamlining debugging for a <strong>Class III medical device</strong>.',
        },
        {
          text: 'Researched and drafted cybersecurity coding conventions aligned with <strong>CERT, MISRA C, and FDA IEC 81001-5-1</strong> guidelines.',
        },
        {
          text: 'Tested CAN protocol on dsPIC33, ensuring reliable communication across medical device subsystems.',
        },
      ],
    },
    {
      company: 'K.J. Somaiya Institute \u2014 Robotics Lab',
      companyFull: 'Robotics Lab \u2014 K.J. Somaiya Institute of Engineering',
      date: 'Aug 2017 \u2013 Mar 2021',
      role: 'Research Assistant & Robotics Team Member',
      roleFull: 'Undergraduate Research Assistant & Robotics Team Member',
      location: 'Mumbai, India',
      academic: true,
      bullets: [
        {
          text: 'Designed and programmed circuit boards for sensor integration \u2014 LIDAR, cameras, ultrasonic, encoders, and actuators across <strong>4 national robotics competitions</strong>.',
        },
        {
          text: 'Integrated robotic subsystems using I2C, SPI, CAN, and UART protocols across distributed embedded controllers.',
        },
        {
          text: 'Developed an autonomous line-follower robot with <strong>90% accuracy</strong>, implementing PID control and motor tuning for real-time path tracking.',
        },
        {
          text: 'Competed in ABU ROBOCON nationally, achieving <strong>AIR 3rd (2018), 5th (2020), and 8th (2021)</strong> among 108+ teams.',
        },
      ],
    },
  ],

  // ======================== SKILLS ========================
  skills: [
    {
      category: 'Languages',
      categoryFull: 'Languages & Scripting',
      icon: '\u2328',
      tags: [
        {
          name: 'C',
          clickable: true,
          flyoutId: 'c-lang',
          flyoutLabel: 'where_i_used_c.log',
          flyoutIntro: 'Primary language across 3+ years of embedded work. Bare-metal and RTOS firmware.',
          flyoutItems: [
            { bold: 'Baxter International', text: 'OTA firmware, peripheral drivers, Yocto BSP integration on Linux-based infusion pumps' },
            { bold: 'Itron', text: 'SPI/UART/I2C sensor drivers and power management firmware on MSP432' },
            { bold: 'Third Pole', text: 'Bootloader and real-time control loops on Renesas SK-S7G2' },
            { bold: 'MITRE eCTF', text: 'Secure boot with SHA-256, ECDSA on MAX78000' },
            { bold: 'ROBOCON (4 yrs)', text: 'Motor control, sensor integration, PID loops on 8051 & AVR' },
          ],
        },
        {
          name: 'C++',
          clickable: true,
          flyoutId: 'cpp-lang',
          flyoutLabel: 'where_i_used_cpp.log',
          flyoutIntro: 'Used for systems programming, compiler tooling, and performance-critical applications.',
          flyoutItems: [
            { bold: 'Lazy Code Motion', text: 'Built a dataflow analysis framework for partial redundancy elimination (30% fewer instructions)' },
            { bold: 'Firmware Size Profiler', text: 'ELF binary parser for ARM Cortex-M memory analysis' },
            { bold: 'SVD Register Tuner', text: 'CMSIS-SVD parser core and bit-field computation engine' },
            { bold: 'Shelf Monitoring Robot', text: 'ROS nodes in C++ for navigation and image processing' },
          ],
        },
        { name: 'Python' },
        { name: 'C#' },
        { name: 'Bash' },
        { name: 'Assembly' },
        { name: 'Linux' },
      ],
    },
    {
      category: 'Frameworks & Build',
      icon: '\u2699',
      tags: [
        { name: 'FreeRTOS' },
        { name: 'Yocto / Bitbake' },
        { name: 'CMake' },
        { name: 'ROS' },
        { name: 'OpenCV' },
        { name: 'Git' },
        { name: 'Nix' },
        { name: 'OpenOCD' },
      ],
    },
    {
      category: 'Tools & IDEs',
      icon: '\uD83D\uDD27',
      tags: [
        { name: 'STM32CubeIDE' },
        { name: 'MPLabIDE' },
        { name: 'IAR Workbench' },
        { name: 'Code Composer Studio' },
        { name: 'Saleae Logic Analyzer' },
        { name: 'MATLAB' },
        { name: 'JIRA' },
      ],
    },
    {
      category: 'Hardware',
      categoryFull: 'Hardware Platforms',
      icon: '\uD83D\uDD29',
      tags: [
        { name: 'STM32' },
        { name: 'MSP432' },
        { name: 'MAX78000FTHR' },
        { name: 'Renesas SK-S7G2' },
        { name: '8051' },
        { name: 'Arduino' },
        { name: 'Raspberry Pi' },
      ],
    },
    {
      category: 'AI & Data',
      icon: '\uD83E\uDD16',
      darkOnly: true,
      tags: [
        { name: 'TensorFlow / Keras' },
        { name: 'NumPy' },
        { name: 'Poetry' },
        { name: 'Leveraging AI for Productivity' },
      ],
    },
    {
      category: 'Protocols & Domains',
      cleanOnly: true,
      tags: [
        { name: 'UART' },
        { name: 'SPI' },
        { name: 'I2C' },
        { name: 'CAN' },
        { name: 'USB' },
        { name: 'JTAG / SWD' },
        { name: 'Medical Devices' },
        { name: 'OTA Updates' },
        { name: 'Secure Boot' },
        { name: 'MISRA C' },
        { name: 'IEC 81001-5-1' },
        { name: 'Real-Time Systems' },
      ],
    },
  ],

  // ======================== ACHIEVEMENTS ========================
  achievements: [
    {
      icon: '\uD83C\uDFC6',
      iconBg: 'purple',
      title: 'MITRE eCTF 2024 \u2014 20th Global',
      desc: 'Designed a secure boot architecture on MAX78000FTHR using TRNG, SHA-256, and ECDSA (secp256k1) as part of Team Virginia Tech.',
      tag: 'Competition \u2022 Security',
      cleanTitle: 'MITRE eCTF 2024',
      cleanDesc: '20th globally in embedded security competition, Team Virginia Tech',
    },
    {
      icon: '\uD83D\uDCDA',
      iconBg: '',
      title: 'M.S. Computer Engineering \u2014 Virginia Tech',
      desc: 'Graduate studies focused on embedded systems, compiler optimization, real-time scheduling, and secure firmware design. GPA: 3.75/4.00.',
      tag: 'Academia \u2022 3.75 GPA',
      cleanTitle: 'M.S. Computer Engineering',
      cleanDesc: 'Virginia Tech, GPA 3.75/4.00 \u2014 embedded systems, compiler optimization, real-time scheduling',
    },
    {
      icon: '\uD83D\uDEE0',
      iconBg: 'yellow',
      title: 'SVD Register Tuner \u2014 VS Code Marketplace',
      desc: 'Published a developer tool that parses CMSIS-SVD files into an interactive register HUD with bit-field visualization and C code generation.',
      tag: 'Published Extension',
      cleanTitle: 'SVD Register Tuner',
      cleanDesc: 'Published VS Code extension for embedded register debugging, available on Marketplace',
    },
    {
      icon: '\uD83D\uDD12',
      iconBg: '',
      title: 'Cybersecurity Coding Conventions',
      desc: 'Researched and drafted coding conventions for a Class III medical device aligned with CERT, MISRA C, and FDA IEC 81001-5-1 guidelines at Third Pole.',
      tag: 'Medical \u2022 Compliance',
      cleanTitle: 'FDA Cybersecurity Research',
      cleanDesc: 'Drafted coding conventions aligned with CERT, MISRA C, and IEC 81001-5-1 for a Class III device',
    },
    {
      icon: '\uD83E\uDD16',
      iconBg: 'purple',
      title: 'ABU ROBOCON \u2014 National Finalist (3 Years)',
      desc: 'Competed nationally in the Asia-Pacific ABU ROBOCON among 108+ teams as part of K.J. Somaiya\u2019s robotics team, achieving All India Ranks of 3rd (2018), 5th (2020), and 8th (2021).',
      tag: 'Robotics \u2022 Competition',
      cleanTitle: 'ABU ROBOCON',
      cleanDesc: 'National finalist 3 consecutive years: AIR 3rd (2018), 5th (2020), 8th (2021) among 108+ teams',
    },
  ],

  // ======================== PROJECTS ========================
  projects: [
    {
      name: 'SVD Register Tuner',
      status: 'live',
      tags: [
        { name: 'VS Code Extension' },
        { name: 'Published', color: 'blue' },
        { name: 'TypeScript', color: 'yellow' },
      ],
      meta: 'VS Code Extension \u00B7 TypeScript \u00B7 Published',
      desc: 'A VS Code extension that parses CMSIS-SVD files into an interactive register HUD with cursor-driven detection, bit-field visualization, and C code generation for embedded firmware development.',
      link: 'svd-register-tuner.html',
      cleanLink: 'svd-register-tuner-clean.html',
    },
    {
      name: 'MITRE eCTF 2024',
      status: 'completed',
      tags: [
        { name: 'Security' },
        { name: 'Competition', color: 'purple' },
        { name: 'MAX78000' },
      ],
      meta: 'Security \u00B7 MAX78000 \u00B7 20th Global',
      desc: 'Designed a secure boot architecture using TRNG, SHA-256, and ECDSA (secp256k1). Placed 20th globally as Team Virginia Tech in MITRE\u2019s Embedded Capture the Flag competition.',
      link: 'mitre-ectf.html',
    },
    {
      name: 'Partial Redundancy \u2014 Lazy Code Motion',
      nameClean: 'Lazy Code Motion',
      status: 'completed',
      tags: [
        { name: 'C++' },
        { name: 'Compiler Optimization', color: 'blue' },
      ],
      meta: 'C++ \u00B7 Compiler Optimization',
      desc: 'Built a dataflow analysis framework in C++ for partial redundancy elimination. Achieved 30% fewer executed instructions compared to loop-invariant code motion.',
      link: 'lazy-code-motion.html',
    },
    {
      name: 'Multi-App Embedded Mobile Device',
      nameClean: 'Multi-App Embedded Device',
      status: 'ongoing',
      tags: [
        { name: 'STM32MP157-DK2' },
        { name: 'Embedded Linux', color: 'yellow' },
      ],
      meta: 'STM32MP157-DK2 \u00B7 Embedded Linux',
      desc: 'Built a multi-application embedded platform on STM32MP157-DK2, demonstrating dual-core SoC architecture with multiple concurrent applications.',
      link: 'multi-app-device.html',
    },
    {
      name: 'RTOS Task Schedulers',
      status: 'completed',
      tags: [
        { name: 'FreeRTOS' },
        { name: 'RMS / DMS / EDF' },
      ],
      meta: 'FreeRTOS \u00B7 RMS / DMS / EDF',
      desc: 'Implemented and compared Rate Monotonic, Deadline Monotonic, and Earliest Deadline First scheduling on FreeRTOS with WCET analysis.',
      link: 'rtos-schedulers.html',
    },
    {
      name: 'Firmware Size Profiler',
      status: 'live',
      tags: [
        { name: 'ARM Cortex-M' },
        { name: 'Developer Tool', color: 'purple' },
      ],
      meta: 'ARM Cortex-M \u00B7 Developer Tool',
      desc: 'A profiling tool for ARM Cortex-M firmware binaries, analyzing memory layout and section sizes to optimize flash and RAM usage.',
      link: 'fwsize-portfolio.html',
      cleanLink: 'fwsize-clean.html',
    },
    {
      name: 'Supermarket Shelf Monitoring Robot',
      nameClean: 'Shelf Monitoring Robot',
      status: 'completed',
      tags: [
        { name: 'ROS' },
        { name: 'OpenCV', color: 'blue' },
        { name: 'Published Paper', color: 'yellow' },
      ],
      meta: 'ROS \u00B7 OpenCV \u00B7 Published Paper',
      desc: 'Bachelor\u2019s final year project \u2014 designed a ROS-based robot that autonomously navigates supermarket aisles, detecting misplaced or out-of-stock items using camera-based shelf monitoring and image processing.',
      link: 'shelf-monitoring-robot.html',
    },
    {
      name: 'Car Steering \u2014 Boundary Lane Modeling',
      nameClean: 'Car Steering \u2014 Lane Modeling',
      status: 'completed',
      tags: [
        { name: 'KeYmaera X' },
        { name: 'Formal Verification', color: 'purple' },
      ],
      meta: 'KeYmaera X \u00B7 Formal Verification',
      desc: 'Modeled a car with steering constrained inside boundary lanes using KeYmaera X, a theorem prover for hybrid systems. Verified safety properties of the continuous-discrete control loop formally.',
      link: 'keymaerax-lane-model.html',
    },
    {
      name: 'ABU ROBOCON 2018 \u2014 AIR 3rd',
      nameClean: 'ABU ROBOCON 2018',
      status: 'completed',
      tags: [
        { name: 'Robotics' },
        { name: 'Competition', color: 'purple' },
        { name: '8051 / Arduino' },
      ],
      meta: 'Robotics \u00B7 8051 / Arduino \u00B7 AIR 3rd',
      desc: 'Designed and built a shuttlecock-throwing robot for the \u201CNen\u201D theme. Achieved All India Rank 3rd among 108+ teams, handling sensor integration, motor control, and pneumatic actuation.',
      descClean: 'Shuttlecock-throwing robot for the \u201CNen\u201D theme. Sensor integration, motor control, and pneumatic actuation. All India Rank 3rd among 108+ teams.',
      link: 'robocon-2018.html',
    },
    {
      name: 'ABU ROBOCON 2019',
      status: 'completed',
      tags: [
        { name: 'Robotics' },
        { name: 'Competition', color: 'purple' },
        { name: 'Embedded C' },
      ],
      meta: 'Robotics \u00B7 Embedded C',
      desc: 'Built a rope-climbing and sand-pit traversal robot for the \u201CHalong Bay\u201D theme. Engineered electro-mechanical subsystems with encoder feedback and PID-controlled locomotion.',
      link: 'robocon-2019.html',
    },
    {
      name: 'ABU ROBOCON 2020 \u2014 AIR 5th',
      nameClean: 'ABU ROBOCON 2020',
      status: 'completed',
      tags: [
        { name: 'Robotics' },
        { name: 'Competition', color: 'purple' },
        { name: 'Raspberry Pi', color: 'blue' },
      ],
      meta: 'Robotics \u00B7 Raspberry Pi \u00B7 AIR 5th',
      desc: 'Developed a rugby-passing robot for the \u201CRobo Rugby 7s\u201D theme. Integrated LIDAR, camera-based tracking, and I2C/CAN communication across distributed controllers. Achieved AIR 5th nationally.',
      descClean: 'Rugby-passing robot with LIDAR, camera-based tracking, and I2C/CAN communication across distributed controllers. All India Rank 5th nationally.',
      link: 'robocon-2020.html',
    },
  ],

  // ======================== EDUCATION ========================
  education: [
    {
      school: 'Virginia Tech',
      degree: 'M.S. Computer Engineering',
      degreeFull: 'Master of Science in Computer Engineering',
      dates: 'Aug 2022 \u2013 May 2024',
      gpa: '3.75 / 4.00',
      featuredCourses: [
        {
          name: 'Compiler Optimization',
          id: 'compiler-opt',
          html: '<ul><li><strong>Lazy Code Motion</strong> \u2014 Implemented partial redundancy elimination using dataflow analysis; achieved 30% fewer executed instructions</li><li><strong>SSA &amp; GVN</strong> \u2014 Built SSA construction pass and global value numbering for redundancy elimination</li><li><strong>Register Allocation</strong> \u2014 Implemented graph-coloring register allocator with spill-code generation</li><li><strong>Loop Optimizations</strong> \u2014 Studied loop unrolling, software pipelining, and strength reduction techniques</li></ul>',
        },
        {
          name: 'Advanced Real-Time Systems',
          id: 'rts',
          html: '<p>Covered formal schedulability analysis for hard real-time systems, including Rate Monotonic, Deadline Monotonic, and EDF scheduling with exact response-time analysis. Built FreeRTOS-based scheduler comparisons, analyzed worst-case execution times, and studied priority inversion protocols (PIP, PCP). Also explored mixed-criticality scheduling and ARINC 653 partitioning for safety-critical avionics.</p>',
        },
        {
          name: 'Software Vulnerability Analysis',
          id: 'vuln',
          html: '<ul><li><strong>Binary Exploitation</strong> \u2014 Stack overflows, ROP chains, heap exploitation, format string vulnerabilities on x86/ARM</li><li><strong>Secure Boot</strong> \u2014 Analyzed chain-of-trust architectures; applied to MITRE eCTF secure boot design</li><li><strong>Fuzzing &amp; Symbolic Execution</strong> \u2014 Used AFL and KLEE for automated vulnerability discovery</li></ul>',
        },
      ],
      otherCourses: ['Computer Architecture', 'Embedded System Design', 'Machine Learning'],
    },
    {
      school: 'K.J. Somaiya Institute of Engineering',
      schoolShort: 'K.J. Somaiya Institute',
      degree: 'B.E. Electronics Engineering',
      degreeFull: 'Bachelor of Engineering in Electronics',
      dates: 'Aug 2017 \u2013 Jun 2021',
      gpa: '3.2 / 4.00',
      featuredCourses: [
        {
          name: 'Embedded Systems',
          id: 'kj-embedded',
          html: '<p>Learned bare-metal programming on 8051 and AVR microcontrollers \u2014 GPIO, timers, interrupts, ADC, and serial protocols. Built motor control firmware for ROBOCON robots and interfaced sensors using I2C and SPI. This course was the foundation for everything I do professionally now.</p>',
        },
        {
          name: 'Digital Signal Processing',
          id: 'kj-dsp',
          html: '<ul><li><strong>Filter Design</strong> \u2014 Designed FIR and IIR filters using windowing methods and bilinear transforms</li><li><strong>FFT &amp; DFT</strong> \u2014 Implemented radix-2 FFT for spectral analysis of sensor signals</li><li><strong>MATLAB Projects</strong> \u2014 Built real-time audio filtering and noise cancellation demos</li></ul>',
        },
        {
          name: 'Control Systems',
          id: 'kj-control',
          html: '<p>Covered classical control theory \u2014 root locus, Bode plots, Nyquist stability, and PID tuning. Applied PID control directly in ROBOCON for motor speed and position regulation. Studied state-space modeling and introductory optimal control for multi-input systems.</p>',
        },
      ],
      otherCourses: [
        'Digital Electronics', 'Analog Circuits', 'Microprocessors & Microcontrollers',
        'Signals & Systems', 'VLSI Design', 'Communication Systems',
        'Power Electronics', 'Electromagnetic Theory', 'Computer Networks',
        'Data Structures', 'Object Oriented Programming', 'Database Management',
        'Operating Systems', 'IoT & Applications', 'Robotics',
        'Instrumentation', 'Engineering Mathematics',
      ],
    },
  ],
};
