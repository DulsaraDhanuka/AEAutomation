function sequence_player_dialog() {
    /*
    Code for Import https://scriptui.joonas.me — (Triple click to select): 
    {"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":"sequence_player","windowType":"Window","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Sequence Player","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Button","parentId":0,"style":{"enabled":true,"varName":"stop_btn","text":"Stop","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"itemReferenceList":"None"}}
    */

    // SEQUENCE_PLAYER
    // ===============
    var sequence_player = new Window("window");
    // sequence_player.text = "Sequence Player";
    sequence_player.preferredSize.width = 150; 
    sequence_player.orientation = "column";
    sequence_player.alignChildren = ["center", "top"];
    sequence_player.spacing = 10;
    sequence_player.margins = 16;

    var stop_btn = sequence_player.add("button", undefined, undefined, { name: "stop_btn" });
    stop_btn.text = "Stop";

    stop_btn.onClick = function () {
        this.window.close();
    }

    return sequence_player;
}