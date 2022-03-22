import json
import os
import sys


CONFIG_PATH = './config.json'

def gen_css(config_json):
    fixed_string = open('./file_text/css_fixed.txt').read()
    combined_var_string = ""
    for k, v in config_json.items():
        var_string = open('./file_text/css_var.txt').read()
        var_string = var_string.replace("$NAMEHOLDER$", k)
        combined_var_string += var_string
    final_string = fixed_string + combined_var_string
    with open('./index.css', 'w') as file:
        file.write(final_string)

def gen_body(config_json):
    import_string = ""
    fixed_body_string = open('./file_text/body_fixed.txt').read()
    combine_var_body_string = ""

    for k, v in config_json.items():
        button_type = v["button_type"]
        import_string += "import {0} from './{0}'\n".format(button_type)
        for k,v in v["images"].items():
            import_string += "import {0} from '{1}'\n".format(button_type+k, v)
    
    for k,v in config_json.items():
        button_type = v["button_type"]
        var_body_string = open('./file_text/body_var.txt').read()
        var_body_string = var_body_string.replace("$INSTRUCTION$", v["instruction"])
        holder = ""
        for k,v in v["buttons"].items():
            holder += "<{2} color='blue' text='{0}' ImgPath={{{1}}}/>\n".format(v, button_type+k, button_type)
        var_body_string = var_body_string.replace("$HOLDER$", holder)
        combine_var_body_string += var_body_string
    
    fixed_body_string = fixed_body_string.replace("$HOLDER$", combine_var_body_string)
    final_string = import_string + fixed_body_string
    with open('./components/Body.js', 'w') as file:
        file.write(final_string)

def gen_addbutton(config_json):
    for k, v in config_json.items():
        fixed_body_string = open('./file_text/buttonfile.txt').read()
        button_type = v["button_type"]
        fixed_body_string = fixed_body_string.replace("$TYPE$",button_type)
        fixed_body_string = fixed_body_string.replace("$KEY$", k)
        with open('./components/{0}.js'.format(button_type), 'w') as file:
            file.write(fixed_body_string)

    





def main():
    config_json = json.load(open(CONFIG_PATH))
    gen_css(config_json)
    gen_body(config_json)
    gen_addbutton(config_json)


main()

