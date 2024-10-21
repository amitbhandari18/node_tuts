# Global modeules are the modules which we dont have to import .

# Non-Global modeules are the modules which we have to import first to do work with them.

# node is async lng

# Difference bw sync and async

1. Synchronous Programming (Sync)
   Execution Model: Tasks are executed one at a time, in a sequential manner. The program waits (or blocks) for each task to complete before moving to the next one.
   Blocking: When a task is running, the execution stops, and no other task can proceed until the current one finishes. This blocking nature makes the program behave in a step-by-step fashion.
   Use Case: It is useful when tasks are relatively short and depend on one another, such as reading and writing small files or simple arithmetic operations.

2. Asynchronous Programming (Async)
   Execution Model: Tasks can be initiated and allowed to run concurrently (without waiting for each other). The program does not block; it can move on to other tasks while waiting for a certain task to finish.
   Non-blocking: In async, a task that may take a while (e.g., waiting for data from a network) is started, and the program continues with other tasks instead of pausing for that task to complete. When the task finishes, it notifies the program.
   Use Case: Async programming is highly efficient for tasks involving I/O operations, such as file access, network calls, and database queries, where waiting time is involved. It allows handling multiple such tasks concurrently without blocking the entire program.

# Node is single threaded lng

A single-threaded language refers to a programming language or environment where tasks or instructions are executed sequentially in a single thread of execution. A thread is the smallest unit of a process that can be scheduled to run by the operating system. In a single-threaded environment:

One thread of execution: Only one task can be processed at a time. The program runs step by step, and each task must finish before the next task starts.
No true parallelism: Since there's only one thread, multiple tasks cannot run in parallel on different CPU cores. Instead, the system processes one task after another in a single line of execution.
Blocking: If one task takes a long time (e.g., waiting for a network response), it can block the entire program from proceeding to other tasks.
Example of Single-Threaded Languages:
Some programming environments are traditionally single-threaded by design, but this doesn't mean they are strictly limited to that. They can simulate concurrency (such as through async programming, which is non-blocking but not truly parallel in a single thread).

JavaScript: One of the most notable examples of a single-threaded language. JavaScript runs in a single thread, especially in browser environments. It uses asynchronous programming (with callbacks, promises, and async/await) to handle tasks like I/O operations without blocking the thread.

# The process.argv reffers to argument vector if we console it .It give us 2 output (1.Where node is downloaded).(2.Frome where are we running it).And if we give some other statements after that it will print it also.

console.log(process.argv);

# The path module in Node.js provides utilities for working with file and directory paths. It allows you to interact with file system paths in a cross-platform way, handling things like concatenating paths, resolving relative paths, and extracting parts of a path (like the directory name or file extension).

# This path module help to find the path of the directory and then create a file there with the help of fs.
