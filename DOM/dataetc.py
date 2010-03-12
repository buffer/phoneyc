def isevent(name, tag):
    if name in ['onblur', 
                'onclick', 
                'ondblclick', 
                'onfocus', 
                'onkeydown', 
                'onkeypress', 
                'onkeyup', 
                'onmousedown', 
                'onmousemove', 
                'onmouseout', 
                'onmouseover', 
                'onmouseup', 
                'onload']: 
        return True
    if tag == 'img' and name in ['onabort', 'onload']: 
        return True
    if tag == 'form' and name in ['onreset', 'onsubmit']: 
        return True
    if tag == 'body' and name in ['onload', 'onunload']: 
        return True
    if name == 'onchange' and tag in ['input', 'select', 'textarea']: 
        return True
    if name == 'onselect' and tag in ['input', 'textarea']: 
        return True
    return False

def attrTrans(name, tag):
    if name == 'class': 
        return 'className'
    if tag == 'meta' and name == 'http-equiv': 
        return 'httpEquiv'
    name = name.replace(':','_').replace('-','_')
    return name

def tagTrans(tag, typ):
    if tag == 'a':              return 'Anchor'
    if tag == 'area':           return 'Area'
    if tag == 'base':           return 'Base'
    if tag == 'body':           return 'Body'
    if tag == 'button':         return 'Button'
    if tag == 'canvas':         return 'Canvas'
    if tag == 'form':           return 'Form'
    if tag == 'frame':          return 'Frame'
    if tag == 'iframe':         return 'Iframe'
    if tag == 'img':            return 'Image'
    if tag == 'input':
        if typ == 'button':     return 'Button'
        if typ == 'checkbox':   return 'Checkbox'
        if typ == 'file':       return 'FileUpload'
        if typ == 'hidden':     return 'Hidden'
        if typ == 'password':   return 'Password'
        if typ == 'radio':      return 'Radio'
        if typ == 'reset':      return 'Reset'
        if typ == 'submit':     return 'Submit'
        if typ == 'text':       return 'Text'
    if tag == 'link':           return 'Link'
    if tag == 'meta':           return 'Meta'
    if tag == 'object':         return 'Object'
    if tag == 'option':         return 'Option'
    if tag == 'select':         return 'Select'
    if tag == 'table':          return 'Table'
    if tag == 'td':             return 'TableCell'
    if tag == 'tr':             return 'TableRow'
    if tag == 'textarea':       return 'Textarea'

classlist = ['Anchor', 
             'Area', 
             'Base', 
             'Body', 
             'Button', 
             'Canvas', 
             'Form', 
             'Frame', 
             'Iframe', 
             'Image', 
             'Checkbox', 
             'FileUpload', 
             'Hidden', 
             'Password', 
             'Radio', 
             'Reset', 
             'Submit', 
             'Text', 
             'Link', 
             'Meta', 
             'Option', 
             'Select', 
             'Table', 
             'TableCell', 
             'TableRow', 
             'Textarea']

def classtotag(clsname):
    if clsname == 'Anchor': 
        return 'a'
    if clsname in ['Checkbox', 
                   'FileUpload', 
                   'Hidden', 
                   'Password', 
                   'Radio', 
                   'Reset', 
                   'Submit', 
                   'Text']: 
        return 'input'
    if clsname == 'Image': 
        return 'img'
    if clsname == 'TableCell': 
        return 'td'
    if clsname == 'TableRow': 
        return 'tr'
    return clsname.lower()

