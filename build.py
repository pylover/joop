#! /bin/env python

import os

thisdir = os.path.abspath(os.path.dirname(__file__))
sourcedir = os.path.join(thisdir,'source')
libdir = os.path.join(thisdir,'lib')

def build(sources,libs,out):
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
                
    print('the file: "%s" was generated successfully. ' % out)

if __name__ == '__main__':
    build([ # Source files
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
          # Output file
          'joop-1.0.js')