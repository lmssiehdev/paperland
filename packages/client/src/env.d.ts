/** Build-time flag (bun build --define __DEV__=true|false). Production bundles drop every `if (__DEV__)` block. */
declare const __DEV__: boolean;
