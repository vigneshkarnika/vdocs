# Editors
- left header top types of editors= default 3d view port editor
### General Editor
- 3d viewport editor - modeling,texturing etc
- Image editor - paint on existing press n for right option
- uv editor
- shader editor(metal,fire shader)
- compositor editor(post processing) m-mute
- texture node editor(combine brick and clouds to paint texture on 3d modeling sculpting)
- video sequencer - k to split,add,modifier,transistions
- movie clip editor - motion tracking

###  Animation Editor
- press i to insert keyframe location(move g+y)
- space animation
- DopeSheet editor- all keyframes edit at once > ex: select all > scale/move
- Graph editor- curve interpolation
- Drivers editor- one object effecting others
- Non Linear Animation Editor > combine seperate animations(2 seperate actions) and repeat(shift+A to search and add action)> blend in and blendout to remove abrupt transitions

#### Scripting Editor
- text editor- write python- output in system console
- python console - write blender code 
```python 
PYTHON INTERACTIVE CONSOLE 3.9.2 (default, Mar 16 2021, 14:53:03)  [Clang 10.0.0 (clang-1000.11.45.5)]

Builtin Modules:       bpy, bpy.data, bpy.ops, bpy.props, bpy.types, bpy.context, bpy.utils, bgl, blf, mathutils
Convenience Imports:   from mathutils import *; from math import *
Convenience Variables: C = bpy.context, D = bpy.data

>>> dir(bpy)
['__all__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__path__', '__spec__', 'app', 'context', 'data', 'msgbus', 'ops', 'path', 'props', 'types', 'utils']

>>> 
 ```
- Info show all actions in code and errors if any

#### Data editors
- outliner editor > gives list of all objects in scene- organise by collection
- property editors > modifiers, materials,render etc
- filebrowser -ctrl+o,ctrl+s
- preferences - customization of software
   - turn off navigation controls
   - interface > menus> pie menu animation  = 0(example z for hotkey)
   - themes >3d view vertex size
   - addons> nodewrangler
   - input> emulate numpad
   - navigation> orbit arround selection or auto depth (on middle click becomes center)
   - zoom to mouse motion
   - right click on any option assign shortcut(export/import key maps)

#### Saving and loading
- numpad+ or plus below adds number right to saved name (save as- ctrl+shift+S)
- file+open - filter,thumbnails . Favorite folders

#### Automatic Backups
- file> recover> last session,autosave or forgot to save(blender saves every 2 mins - saveandload and change time)
- remove filter on open to see other backup blend files
- we can increase more backups - save versions - 10
- import and export

#### Navigate on 3d view
- go to view> to see all options under view points and shorcuts
- 1 = front view, 3= sideview, 7 = topview
- ctrl+1=backview, ctrl+3, ctrl+7
- 5 = orthograph
- 4,6 = right and left by 15 degrees
- 2,8 = up and down
- ~  pie menu
- alt+ middle mouse drag
- also vies on top right
- shift+ = pan
- rotate = middle click and drag
- / for zoom in selected
- shift+c to center everything
- 0 for cam view

#### Axis and Grid
- green=x axis, blue= yaxis, red= zaxis
- n for origin
- alt+ctrl for snapping
- scene properties > units>
- grid subdivisions
