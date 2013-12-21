#! /bin/env python

import os

thisdir = os.path.abspath(os.path.dirname(__file__))
sourcedir = os.path.join(thisdir,'source')

def build(sources,out):
    sources = [os.path.join(sourcedir,s) for s in sources]
    out = os.path.join(thisdir,out)
    with open(out,'w') as outfile:
        for source in sources:
            with open(source) as sourcefile:
                outfile.write('\n')
                outfile.write(sourcefile.read())
                outfile.write('\n')

if __name__ == '__main__':
    build(# Source files
          ['joop.class.js',
           'joop.singleton.js',
           'joop.object.js',
           'joop.helpers.js'],
          # Output file
          'joop-1.0.js')