# ts-node
ts-node is a TypeScript execution engine and REPL for Node.js.

It JIT transforms TypeScript into JavaScript, enabling you to directly execute TypeScript on Node.js without precompiling. This is accomplished by hooking node's module loading APIs, enabling it to be used seamlessly alongside other Node.js tools and libraries.

## Installation

```
# Locally in your project.
npm install -D typescript
npm install -D ts-node

# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node

# Depending on configuration, you may also need these
npm install -D tslib @types/node

```
## Usage Shell
#### Execute a script as `node` + `tsc`.
```ts-node script.ts```