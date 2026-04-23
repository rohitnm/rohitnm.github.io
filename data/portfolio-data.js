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
    'Embedded C/C++ & Bare-Metal Development',
    'RTOS (FreeRTOS) & Real-Time Systems',
    'Embedded Architecture & Firmware Design',
    'Device Drivers & Hardware Abstraction Layers (HAL)',
    'Sensor Integration & Signal Processing',
    'Control Systems (PID, Motor Control)',
    'Bootloaders & OTA Firmware Updates',
    'Embedded Linux (Yocto, Buildroot)',
    'Testing, Validation & Debugging',
    'Oscilloscope & Logic Analyzer Debugging',
    'Hardware Bring-Up & Board-Level Debugging',
  ],

  // ======================== METRICS ========================
  // Dark theme only (cycling metrics banner)
  metrics: [
    { number: '3+',     label: 'Years of Professional Experience',     context: 'Firmware & Embedded Systems' },
    { number: '11',     label: 'Projects Built',                       context: 'Robotics and Embedded Systems' },
    { number: '\u221E', label: 'Curiosity Level',                      context: 'Always Learning' },
    { number: '100%',   label: "Chance I'll Read Documentation",       context: 'Before Asking Questions' },
    { number: '115200', label: 'Baud Rate of Choice',                  context: 'The Classic' },
    { number: '20th',   label: 'Global \u2014 MITRE eCTF',             context: 'Team Virginia Tech' },
    { number: '1024',   label: 'Coffee Cups Every Year',               context: 'Fuel for Life' },
    { number: '3rd',    label: 'All India Rank \u2014 ROBOCON 2018',   context: '108+ Teams Nationally' },
    { number: '5th',    label: 'All India Rank \u2014 ROBOCON 2020',   context: '94+ Teams Nationally' },
    { number: '8th',    label: 'All India Rank \u2014 ROBOCON 2021',   context: '114+ Teams Nationally' },
    { number: '3.2',    label: 'Undergraduate GPA',                    context: 'University of Mumbai' },
    { number: '3.75',   label: 'Graduate GPA',                         context: 'Virginia Tech \u2014 M.S. CompE' },
    { number: '5+',     label: 'Communication Protocols',              context: 'UART \u2022 SPI \u2022 I2C \u2022 CAN \u2022 LIN' },
    { number: '7+',     label: 'Microcontroller Families',             context: 'STM32 \u2022 MSP432 \u2022 MAX78000 \u2022 Renesas \u2022 8051 \u2022 AVR \u2022 RPi' },
    { number: '6',      label: 'Programming Languages',                context: 'C \u2022 C++ \u2022 Python \u2022 C# \u2022 Bash \u2022 Assembly' },
    { number: '7+',     label: 'IDEs & Toolchains',                    context: 'STM32CubeIDE \u2022 IAR \u2022 CCS \u2022 MPLab \u2022 VS Code' },
    { number: '1',      label: 'VS Code Marketplace Extension',        context: 'SVD Register Tuner' },
    { number: '10+',    label: 'Sensor Types Integrated',              context: 'LIDAR \u2022 Camera \u2022 Ultrasonic \u2022 IMU \u2022 Encoders' },
    { number: '4',      label: 'Years on Robotics Team',               context: 'K.J. Somaiya 2017\u20132021' },
    { number: '500+',   label: 'Hours of PS5 Gameplay Logged',         context: 'Recharge Time' },
    { number: '30+',    label: 'Games in Backlog',                     context: 'Will Finish Eventually' },
    { number: '5',      label: 'Languages Spoken',                     context: 'English \u2022 Hindi \u2022 Gujarati \u2022 Marathi \u2022 Spanish' },
  ],

  // ======================== EXPERIENCE ========================
  experience: [
    {
      company: 'Baxter International \u2014 LER TechForce LLC',
      companyFull: 'Baxter International \u2014 LER TechForce LLC',
      date: 'Apr 2025 \u2013 Present',
      role: 'Embedded Software Engineer',
      location: 'Raleigh, NC',
      current: true,
      bullets: [
        {
          text: '<strong><em> Worked on the embedded software team for a network-connected medical bed system, adding features to enable new hardware capabilities.</em></strong>',
        },
        { 
          text: 'Improved OTA firmware upgrade reliability for a medical bed system by investigating update failure points and documenting the end-to-end upgrade process, supporting an increase in target success rate from <strong>90% toward a 95%</strong> target.',
          expandable: true,
          detailId: 'ota-detail',
          detail: '<ul><p style="font-size: larger;"><strong>Description:</strong></p><li>Worked on enhancing the reliability of OTA firmware updates for a network-connected medical bed system, focusing on identifying failure points and improving upgrade success rates.</li></ul><br><ul><p style="font-size: larger;"><strong>What I Did:</strong></p><li>Analyzed end-to-end OTA workflow across embedded Linux (Yocto) and RTOS subsystems.</li><li>Identified critical failure points during firmware download, validation, and flashing stages.</li><li>Documented the complete upgrade pipeline, including edge cases and rollback scenarios.</li><li>Collaborated with QA teams to align debugging and validation strategies.</li></ul><br><ul><p style="font-size: larger;"><strong>Impact:</strong></p><li>Reduced ambiguity in failure diagnosis through structured documentation.</li><li>Identified and analyzed critical failure points in OTA upgrade workflows, improving reliability and increasing success rates from ~90% toward a 95% target.</li></ul>',
        },
        {
          text: 'Implemented flash erase and write timing calculation routines to improve OTA firmware update reliability and reduce risk of data corruption.',
          expandable: true,
          detailId: 'flash-detail',
          detail: '<ul><p style="font-size: larger;"><strong>Description:</strong></p><li>Worked on improving flash operation reliability by accurately modeling and calculating timing for erase and write cycles during firmware upgradess/</li></ul><br><ul><p style="font-size: larger;"><strong>What I Did:</strong></p><li>Developed functions to compute flash erase and write timings based on memory specifications.</li><li>Integrated timing logic into OTA upgrade flow to ensure safe and consistent flash operations.</li></ul><br><ul><p style="font-size: larger;"><strong>Impact:</strong></p><li>Improved log quality by providing more accurate and timely information about flash operations.</li><li>Flash timings helped with identifying and pinning down exactly which board was experiencing issues.</li></ul>',
        },
        {
          text: ' Developed a single firmware upgrade package for a medical bed by modifying Bash scripts to generate an encrypted upgrade bundle, improving deployment reliability and security.',
          expandable: true,
          detailId: 'upgrade-package-detail',
          detail: '<ul><p style="font-size: larger;"><strong>Description:</strong></p><li>Developed a unified and secure firmware packaging mechanism to streamline OTA deployment.</li></ul><br><ul><p style="font-size: larger;"><strong>What I Did:</strong></p><li>Modified and integrated existing Bash scripts to create a single encrypted firmware upgrade package.</li><li>Standardized the packaging format across multiple upgrade scenarios.</li></ul><br><ul><p style="font-size: larger;"><strong>Impact:</strong></p><li>Improved deployment reliability by reducing multi-file inconsistencies.</li><li>Enhanced firmware security through encryption of the upgrade bundle.</li></ul>',
        },
        {
          text: 'Architected cross-OS firmware logging using custom RPCA commands across Yocto Linux and RTOS, adding <strong>50+ log points</strong> on medical bed to detect firmware failures and monitor upgrade workflows, reducing debugging time by <strong>75%</strong>.',
          expandable: true,
          detailId: 'logging-detail',
          detail: '<ul><p style="font-size: larger;"><strong>Description:</strong></p><li>Designed and implemented a unified logging framework to improve observability across embedded Linux and RTOS subsystems in a network-connected medical device.</li></ul><br><ul><p style="font-size: larger;"><strong>What I Did:</strong></p><li>Added custom RPCA based command interfaces for cross-os communication.</li><li>Implemented logging hooks and added 50+ strategic log points across firmware upgrade flow and system states.</li><li>Built a centralized logging mechanism to correlate events across distributed components.</li></ul><br><ul><p style="font-size: larger;"><strong>Impact:</strong></p><li>Reduced debugging and root-cause analysis time by ~75%.</li><li>Enabled end-to-end traceability of firmware behavior across OS boundaries.</li><li>Improved reliability of OTA upgrade workflows through better failure visibility.</li></ul>',
        },
        {
          text: 'Performed development testing of embedded firmware on medical bed to validate new features, bug fixes, and upgrade flows.',
          expandable: true,
          detailId: 'testing-detail',
          detail: '<ul><p style="font-size: larger;"><strong>Description:</strong></p><li>Performed hands-on validation of firmware features and upgrade flows for medical beds.</li></ul><br><ul><p style="font-size: larger;"><strong>What I Did:</strong></p><li>Tested firmware on medical bed hardware for feature validation and bug fixes.</li><li>Verified OTA upgrade scenarios including success, failure, and rollback.</li><li>Debugged issues using hardware debugging tools (iSystem IC5000, JTAG).</li></ul><br><ul><p style="font-size: larger;"><strong>Impact:</strong></p><li>Ensured robust and reliable firmware behavior across different deployment scenarios before release.</li><li>Improved confidence in OTA upgrade workflows.</li></ul>',
        },
        {
          text: 'Built and sourced Yocto-based SDK environments for ARM targets, enabling cross-compilation and embedded Linux development.',
          expandable: true,
          detailId: 'yocto-detail',
          detail: '<ul><p style="font-size: larger;"><strong>Description:</strong></p><li>Set up and maintained cross-compilation environments for ARM-based embedded systems.</li></ul><br><ul><p style="font-size: larger;"><strong>What I Did:</strong></p><li>Built and configured SDKs using Yocto Project.</li><li>Assisted in integrating build outputs with firmware deployment pipelines.</li></ul><br><ul><p style="font-size: larger;"><strong>Impact:</strong></p><li>Streamlined development setup for embedded Linux targets.</li><li>Improved developer efficiency and build consistency.</li></ul>',
        },
        {
          text: '<strong>Reflection:</strong><em> This role has been an excellent opportunity to work on real-world embedded systems in the medical domain, applying and expanding my skills in firmware development, OTA updates, and cross-platform logging. I particularly enjoyed improving system reliability and observability in a complex, production-grade environment. The work also involved iterative development cycles and cross-functional collaboration, strengthening my ability to deliver software incrementally. Overall, it reinforced the importance of system-level thinking, structured debugging, and designing robust embedded solutions under real-world constraints.</em>',
        }
      ],
    },
    {
      company: 'Itron, Inc.',
      date: 'Jul 2024 \u2013 Apr 2025',
      role: 'Firmware Engineer (Appretenceship)',
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
      cleanDesc: '20th globally in embedded security competition. Designed a secure boot architecture on MAX78000FTHR using TRNG, SHA-256, and ECDSA (secp256k1) as part of Team Virginia Tech.',
    },
    {
      icon: '\uD83D\uDEE0',
      iconBg: 'yellow',
      title: 'SVD Register Tuner \u2014 VS Code Marketplace',
      desc: 'Published a developer tool that parses CMSIS-SVD files into an interactive register HUD with bit-field visualization and C code generation.',
      tag: 'Published Extension',
      cleanTitle: 'SVD Register Tuner VS Code Extension',
      cleanDesc: 'Published a developer tool that parses CMSIS-SVD files into an interactive register HUD with bit-field visualization and C code generation.',
    },
    {
      icon: '\uD83E\uDD16',
      iconBg: 'purple',
      title: 'ABU ROBOCON \u2014 National Competition (3 Years)',
      desc: 'Competed nationally in the Asia-Pacific ABU ROBOCON among 108+ teams as part of K.J. Somaiya\u2019s robotics team, achieving All India Ranks of 3rd (2018), 5th (2020), and 8th (2021).',
      tag: 'Robotics \u2022 Competition',
      cleanTitle: 'ABU ROBOCON \u2014 National Competition (3 Years)',
      cleanDesc: 'Competed nationally in the Asia-Pacific ABU ROBOCON among 108+ teams as part of K.J. Somaiya\'s robotics team, achieving All India Ranks of 3rd (2018), 5th (2020), and 8th (2021).',
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
      school: 'Virginia Polytechnic Institute and State University (Virginia Tech)',
      degree: 'M.S. Computer Engineering',
      degreeFull: 'Master of Science in Computer Engineering',
      dates: 'Aug 2022 \u2013 May 2024',
      gpa: '3.75 / 4.00',
      featuredCourses: [
        {
          name: 'Compiler Optimization',
          id: 'compiler-opt',
          html: '<p>Studied dataflow analysis, partial redundancy elimination, dead code elimination, and code motion techniques.</p><ul><li>Implemented techniques like Constant Folding to pre-calculate math problems during compilation so the software doesn\'t have to do the work at runtime.</li><li>Applied techniques to reorganize repetitive loops, reducing the workload on the CPU and helping the program access memory more efficiently.</li><li>Used the LLVM toolkit to build custom passes in C++ that automatically scan and fix inefficient code. This gave me a full "under-the-hood" understanding of how a computer transforms human-written code into high-performance machine instructions.</li></ul>',
        },
        {
          name: 'Advanced Real-Time Systems',
          id: 'rts',
          html: '<p>Deep dive into RMS, DMS, and EDF scheduling theory with hands-on FreeRTOS implementation. Covered schedulability analysis, priority inversion, and worst-case execution time estimation for safety-critical systems.</p>',
        },
        {
          name: 'Computer Architecture',
          id: 'vuln',
          html: '<p>Explored pipelining, cache hierarchies, branch prediction, and out-of-order execution.</p><ul><li>Tomasulo\'s Algorithm: Got indepth understanding of how the hardware can automatically reorder instructions to execute them as soon as their data is ready, rather than just running them in the order they were written.</li><li>Studied and simulated the MESI (Modified, Exclusive, Shared, Invalid) snooping protocols to maintain data consistency and cache coherence across multi-core processor architectures.</li><li>Used the LLVM toolkit to build custom passes in C++ that automatically scan and fix inefficient code. This gave me a full "under-the-hood" understanding of how a computer transforms human-written code into high-performance machine instructions.</li></ul>',
        },
      ],
      otherCourses: ['Advanced Machine Learning', 'Computer Vision', 'Cyber-Physical Systems', 'Energy Harvesting & Intermittent Computing', 'Advanced Technological Singularity'],
    },
    {
      school: 'K.J Somaiya Institute of Engineering &amp; Information Technology, University of Mumbai',
      schoolShort: 'K.J Somaiya Institute of Engineering &amp; Information Technology, University of Mumbai',
      degree: 'Bachelor of Engineering in Electronics',
      degreeFull: 'Bachelor of Engineering in Electronics',
      dates: 'Aug 2017 \u2013 Jun 2021',
      gpa: '3.2 / 4.00',
      featuredCourses: [
        {
          name: 'Embedded Systems & RTOS',
          id: 'kj-embedded',
          html: '<p>Studied design and implementation of embedded systems, including microcontrollers, real-time operating systems, and hardware-software co-design.</p><ul><li>Gained hands-on experience with microcontroller-based system design, focusing on efficient resource utilization and performance</li><li>Worked with real-time operating system (RTOS) concepts such as task scheduling, interrupts, and concurrency management</li><li>Developed embedded applications in Embedded C, emphasizing low-level hardware interaction and optimization for real-time constraints</li></ul>',
        },
        {
          name: 'Internet of Things',
          id: 'kj-dsp',
          html: '<p>Developed a strong foundation in Internet of Things (IoT) systems, integrating hardware, communication protocols, and cloud connectivity.</p><ul><li>Built IoT prototypes using microcontrollers and sensors for real-time data acquisition and control.</li><li>Implemented communication using protocols like MQTT and HTTP for device-to-cloud interaction.</li><li>Worked with platforms such as Raspberry Pi and Arduino for rapid prototyping and system integration.</li></ul>',
        },
        {
          name: 'Microprocessors & Microcontrollers',
          id: 'kj-control',
          html: '<p>Strong foundation in microprocessor and microcontroller systems with hands-on low-level programming and hardware interfacing. <ul><li> Worked extensively with Intel 8086 and Intel 8051, understanding architecture, instruction sets, and memory organization.</li><li>Developed programs in Assembly Language and Embedded C for control logic and data processing.</li><li>Implemented hardware interfacing with peripherals (timers, I/O ports, UART) and built basic embedded applications.</li></ul></p>',
        },
      ],
      otherCourses: [
        'Analog & Mixed VLSI Design', 'Digital Signal Processing', 'Power Electronics',
        'Instrumentation System Design', 'Wireless Communication', 'Signals and Systems',
        'Object Oriented Programming', 'Neural Networks & Fuzzy Logic', 'Cyber Security and Laws',
        'Computer Communication Network', 'Database & Management Systems', 'Design with Linear Integrated Circuits',
        'Engineering Electromagnetics', 'Digital Communication', 'Linear Control Systems',
        'Principles of Communication Engineering', 'Digital System Design', 'Electronic Network Analysis & Synthesis',
        'Digital Circuit Design', 'Electronic Devices & Circuits', 'Applied Physics',
        'Engineering Drawing', 'Engineering Mechanics', 'Applied Chemistry',
        'Engineering Mathematics', 'Finance Management',
      ],
    },
  ],
};
