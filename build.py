#! /bin/env python

import os

thisdir = os.path.abspath(os.path.dirname(__file__))
sourcedir = os.path.join(thisdir,'source')
libdir = os.path.join(thisdir,'lib')
__version__ = '1.0'

def build(sources,libs,out,minified_out):
    sources = [os.path.join(sourcedir,s) for s in sources]
    libs = [os.path.join(libdir,s) for s in libs]
    out = os.path.join(thisdir,out)
    with open(out,'w') as outfile:
        
        # include libfiles
        for lib in libs:
            with open(lib) as libfile:
                outfile.write('\n')
                outfile.write(libfile.read())
                outfile.write('\n')
                
        # include sources
        for source in sources:
            with open(source) as sourcefile:
                outfile.write('\n')
                outfile.write(sourcefile.read())
                outfile.write('\n')

    
    # Due to slimit problem, it commented
    """
    try:
        from slimit import minify
        
        with open(out) as outfile:
            with open(minified_out,'w') as minified:
                minified.write(minify(outfile.read(), mangle=False, mangle_toplevel=False))
            
    except ImportError:
        print('Slimit package was not available')                   
    """
    print('the file: "%s" was generated successfully. ' % out)

if __name__ == '__main__':
    out_filename = 'joop-%s.js' % __version__
    minified_out_filename = 'joop-%s.min.js' % __version__
    build([ # Source files
           'joop.ie.compat.js',
           'joop.helpers.js',
           'joop.namespace.js',
           'joop.init.js',
           'joop.class.js',
           'joop.singleton.js',
           'joop.object.js',
           ],
          [ # Libraries to insert before sources
           'sprintf/sprintf.js',
           ],
          # Output files
          out_filename,minified_out_filename)

             
