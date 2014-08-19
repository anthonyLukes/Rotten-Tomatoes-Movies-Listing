/**
 * Build configuration declaration.
 *
 * This configuration file contains values specific to the RequireJS optimizer.
 * Any values that need to be shared between the website and the build script
 * should be placed into [Config.js] instead.
 *
 *   Steps to generate compiled output using this build file:
 *
 *   1. Run the following command:
 *
 *          node.exe r.js -o path/build-main.js
 *
 *   2. Compiled output will be placed in the following location. The application  
 *      would need to be configured to point to the compiled script.
 *
 *          /assets/scripts/build/main.js
 */

{
    baseUrl: 'web/assets/scripts/src',                  // Path of source scripts, relative to this build file
    mainConfigFile: 'web/assets/scripts/src/config.js', // Path of shared configuration file, relative to this build file
    name: 'main',                                       // Name of input script (.js extension inferred)
    out: 'web/assets/scripts/build/main.js',            // Path of built script output
    
    pragmas: {
        debugExclude: true
    },
    fileExclusionRegExp: /.svn/,                        // Ignore all files matching this pattern
    useStrict: true,
    preserveLicenseComments: true,
    optimize: 'uglify2',
    uglify2: {
        output: {
            beautify: false
        },
        compress: {
            sequences: false,
            global_defs: {
                DEBUG: false
            }
        },
        warnings: false,
        mangle: true
    }
}