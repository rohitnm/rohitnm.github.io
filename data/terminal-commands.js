// ============================================================
//  terminal-commands.js — All interactive terminal commands
//  Edit commands HERE. The terminal in index.html reads from
//  this file. Add, remove, or edit commands in one place.
//
//  HOW TO ADD A COMMAND:
//  1. Add an entry to TERMINAL_COMMANDS array below
//  2. Set the 'name' (what the user types)
//  3. Set 'desc' (shown in help listing)
//  4. Set 'output' as a string (with {color} tags) OR
//     set 'handler' to "special-name" for dynamic commands
//
//  COLOR TAGS: {ok} {err} {bright} {value} {flag} {comment}
//              {info} {purple} {prompt} {cmd}
//  Use {/} to close a tag.  Newlines: \n
//
//  EXAMPLE:
//  { name: 'motto', desc: 'life motto', output: '{ok}Ship it. Debug it. Repeat.{/}' },
// ============================================================

var TERMINAL_COMMANDS = [

  // ======================== CORE ========================
  {
    name: 'help',
    desc: 'list all commands',
    handler: 'help',
  },

  {
    name: 'whoami',
    desc: 'who is Rohit Mehta',
    output:
      '{bright}Rohit Mehta{/}\n' +
      '{value}Embedded Software Engineer{/}\n' +
      '{comment}Building reliable firmware for medical devices, IoT, and safety-critical systems.\nFrom bare metal to Yocto Linux.{/}',
  },

  {
    name: 'status',
    desc: 'systemctl status',
    output:
      '{prompt}${/} {cmd}systemctl status{/} {value}rohit.service{/}\n' +
      '{ok}\u25CF{/} {cmd}rohit.service - Embedded Engineer{/}\n' +
      '  {flag}Loaded:{/}  {value}loaded (Virginia Tech, M.S. CompE){/}\n' +
      '  {flag}Active:{/}  {ok}active (running){/} {comment}since Apr 2025{/}\n' +
      '  {flag}Role:{/}    {value}Baxter International{/}\n' +
      '  {flag}PID:{/}     {value}2025{/} {comment}(firmware-eng){/}\n' +
      '  {flag}Memory:{/}  {value}3.75 GPA{/}\n' +
      '  {flag}Tasks:{/}   {value}OTA, Yocto SDK, RPCA Logging{/}\n' +
      '{comment}# uptime: 3+ years in embedded{/}',
  },

  {
    name: 'neofetch',
    desc: 'system info card',
    output:
      '{purple}   \u2588\u2588\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2557   \u2588\u2588\u2588\u2557{/}   {bright}rohit{/}{comment}@{/}{bright}portfolio{/}\n' +
      '{purple}   \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2588\u2588\u2557 \u2588\u2588\u2588\u2588\u2551{/}   {comment}\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500{/}\n' +
      '{purple}   \u2588\u2588\u2588\u2588\u2588\u2588\u2554\u2563\u2588\u2588\u2554\u2588\u2588\u2588\u2588\u2554\u2588\u2588\u2551{/}   {flag}OS:{/}       {value}Embedded Linux / FreeRTOS{/}\n' +
      '{purple}   \u2588\u2588\u2554\u2550\u2550\u2588\u2588\u2557\u2588\u2588\u2551\u255A\u2588\u2588\u2554\u255D\u2588\u2588\u2551{/}   {flag}Host:{/}     {value}Baxter International{/}\n' +
      '{purple}   \u2588\u2588\u2551  \u2588\u2588\u2551\u2588\u2588\u2551 \u255A\u2550\u255D \u2588\u2588\u2551{/}   {flag}Kernel:{/}   {value}ARM Cortex-M / STM32{/}\n' +
      '{purple}   \u255A\u2550\u255D  \u255A\u2550\u255D\u255A\u2550\u255D     \u255A\u2550\u255D{/}   {flag}Shell:{/}    {value}C / C++ / Python / Bash{/}\n' +
      '                        {flag}Uptime:{/}   {value}3+ years in embedded{/}\n' +
      '                        {flag}Packages:{/} {value}11 projects built{/}\n' +
      '                        {flag}Memory:{/}   {value}3.75 GPA (Virginia Tech){/}\n' +
      '                        {flag}Disk:{/}     {value}~2K lines TypeScript (SVD ext){/}\n' +
      '                        {flag}Coffee:{/}   {value}1024 cups/year{/}\n' +
      '                        {flag}IDE:{/}      {value}VS Code + STM32CubeIDE{/}',
  },

  // ======================== DATA EXPLORATION ========================
  {
    name: 'ls projects/',
    desc: 'list all projects',
    handler: 'ls-projects',
  },

  {
    name: 'ls experience/',
    desc: 'work history',
    handler: 'ls-experience',
  },

  {
    name: 'ls skills/',
    desc: 'technical skills',
    handler: 'ls-skills',
  },

  {
    name: 'cat about.txt',
    desc: 'short bio',
    output:
      '{value}Rohit Mehta{/} {comment}// Embedded Software Engineer{/}\n\n' +
      'Drawn to making hardware do exactly what it needs to \u2014\n' +
      'reliably, efficiently, and at the closest level to the metal.\n\n' +
      'Medical bed firmware at Baxter. Wi-Fi failure automation at Itron.\n' +
      'Class III medical device debugging at Third Pole.\n\n' +
      'M.S. CompE from Virginia Tech. MITRE eCTF competitor.\n' +
      'Built developer tools. Published to VS Code Marketplace.\n\n' +
      '{comment}# When not writing firmware: cricket, road trips, too much coffee.{/}',
  },

  {
    name: 'cat resume.txt',
    desc: 'formatted resume summary',
    handler: 'cat-resume',
  },

  // ======================== NETWORKING ========================
  {
    name: 'ping linkedin',
    desc: 'LinkedIn profile',
    handler: 'ping-linkedin',
  },

  {
    name: 'ping github',
    desc: 'GitHub profile',
    handler: 'ping-github',
  },

  {
    name: 'sudo hire rohit',
    desc: 'send an offer',
    handler: 'sudo-hire',
  },

  // ======================== UTILITY ========================
  {
    name: 'uptime',
    desc: 'career uptime',
    handler: 'uptime',
  },

  {
    name: 'date',
    desc: 'current date',
    handler: 'date',
  },

  {
    name: 'history',
    desc: 'command history',
    handler: 'history',
  },

  {
    name: 'clear',
    desc: 'clear terminal',
    handler: 'clear',
  },

  {
    name: 'sudo -i',
    desc: 'advanced user commands',
    handler: 'sudo-i',
  },

  {
    name: 'cat portfolio',
    desc: 'view full portfolio page',
    handler: 'cat-portfolio',
  },

  {
    name: 'exit',
    desc: 'close terminal & view portfolio',
    handler: 'exit',
  },

  // ======================== ALIASES & SHORTCUTS ========================
  {
    name: 'ls',
    output:
      '{bright}about.txt  resume.txt  projects/  experience/  skills/{/}\n' +
      '{comment}// Try: ls projects/ | ls experience/ | ls skills/{/}',
    hidden: true,
  },

  {
    name: 'pwd',
    output: '{value}/home/rohit/portfolio{/}',
    hidden: true,
  },

  {
    name: 'cd',
    output: "{comment}rohit@dev:~/portfolio$  // you're already home{/}",
    hidden: true,
  },

  {
    name: 'cat',
    output: '{comment}// Try: cat about.txt | cat resume.txt{/}',
    hidden: true,
  },

  {
    name: 'ping',
    output: '{comment}// Available: {/}{bright}ping linkedin{/} | {bright}ping github{/}',
    hidden: true,
  },

  {
    name: 'sudo',
    output: '{comment}// Did you mean: {/}{bright}sudo hire rohit{/}{comment}  or  {/}{bright}sudo -i{/}{comment} ?{/}',
    hidden: true,
  },

  {
    name: 'man rohit',
    aliasOf: 'cat resume.txt',
    hidden: true,
  },

  // ======================== EASTER EGGS ========================
  {
    name: 'hello',
    output: '{ok}Hey there! {/}{comment}Type help to explore.{/}',
    hidden: true,
  },

  {
    name: 'hi',
    aliasOf: 'hello',
    hidden: true,
  },

  {
    name: 'rm -rf /',
    output:
      '{err}\u26A0  Permission denied.{/}\n' +
      '{comment}Nice try. This portfolio is backed up.{/}\n' +
      '{ok}// No firmware was harmed in the making of this terminal.{/}',
    hidden: true,
  },

  {
    name: 'rm',
    aliasOf: 'rm -rf /',
    hidden: true,
  },

  // ================================================================
  //  ADD YOUR OWN COMMANDS BELOW
  //  Examples:
  //
  //  Simple text:
  //  { name: 'motto', desc: 'life motto', output: '{ok}Ship it. Debug it. Repeat.{/}' },
  //
  //  Hidden alias:
  //  { name: 'projects', aliasOf: 'ls projects/', hidden: true },
  //
  //  Multi-line colored:
  //  {
  //    name: 'stack',
  //    desc: 'tech stack',
  //    output:
  //      '{flag}Languages:{/}  {value}C, C++, Python{/}\n' +
  //      '{flag}RTOS:{/}      {value}FreeRTOS, Yocto{/}\n' +
  //      '{flag}Hardware:{/}  {value}STM32, MSP432{/}',
  //  },
  // ================================================================

];
