// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.APICaller")
                .setHost(host,"api_1")
                .setName("api_1")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button7")
                .setLeft("0.7619047619047619em")
                .setTop("0.7619047619047619em")
                .setWidth("9.066666666666666em")
                .setCaption("Button")
                .onClick([
                    {
                        "desc" : "Action 1",
                        "type" : "control",
                        "target" : "xui_ui_label16",
                        "args" : [
                            {
                            },
                            {
                                "caption" : "{getCookies()}"
                            }
                        ],
                        "method" : "setProperties",
                        "event" : 1
                    }
                ])
            );
            
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setLeft("0.7619047619047619em")
                .setTop("3.8095238095238093em")
                .setWidth("11.428571428571429em")
                .setHeight("2.2857142857142856em")
                .setCaption("Label")
                .setHAlign("left")
            );
            
            append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput48")
                .setLeft("0.7619047619047619em")
                .setTop("6.095238095238095em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Help Input")
                .setType("helpinput")
                .setItems([
                    {
                        "id" : "item 1 text",
                        "caption" : "item 1"
                    },
                    {
                        "id" : "item 2 text",
                        "caption" : "item 2"
                    }
                ])
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});