cTID = function (s) { return app.charIDToTypeID(s); };
sTID = function (s) { return app.stringIDToTypeID(s); };

function removeBackgroundAction() {
    // Convert to Smart Object
    function step3(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        executeAction(sTID('newPlacedLayer'), undefined, dialogMode);
    };

    // Rasterize
    function step5(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc5 = new ActionDescriptor();
        var ref4 = new ActionReference();
        ref4.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        desc5.putReference(charIDToTypeID("null"), ref4);
        desc5.putEnumerated(charIDToTypeID("What"), stringIDToTypeID("rasterizeItem"), stringIDToTypeID("layerStyle"));
        executeAction(stringIDToTypeID("rasterizeLayer"), desc5, dialogMode);
    };

    // Select
    function step6(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Make
    function step13(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID('Nw  '), cTID('Chnl'));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
        desc1.putReference(cTID('At  '), ref1);
        desc1.putEnumerated(cTID('Usng'), cTID('UsrM'), cTID('RvlA'));
        executeAction(cTID('Mk  '), desc1, dialogMode);
    };

    // Apply Image
    function step14(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var desc2 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Mrgd'));
        desc2.putReference(cTID('T   '), ref1);
        desc2.putEnumerated(cTID('Clcl'), cTID('Clcn'), cTID('Mltp'));
        desc2.putBoolean(cTID('PrsT'), true);
        desc1.putObject(cTID('With'), cTID('Clcl'), desc2);
        executeAction(sTID('applyImageEvent'), desc1, dialogMode);
    };

    // Select
    function step15(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Invert
    function step16(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        executeAction(cTID('Invr'), undefined, dialogMode);
    };

    // Set
    function step20(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
        var desc3 = new ActionDescriptor();
        desc3.putBoolean(cTID('enab'), true);
        desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
        desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
        var desc4 = new ActionDescriptor();
        desc4.putDouble(cTID('Rd  '), 90.3151725232601);
        desc4.putDouble(cTID('Grn '), 245.000000596046);
        desc4.putDouble(cTID('Bl  '), 243.175095319748);
        desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
        desc2.putObject(cTID('SoFi'), cTID('SoFi'), desc3);
        desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Hide
    function step21(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putClass(cTID('SoFi'));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        list1.putReference(ref1);
        desc1.putList(cTID('null'), list1);
        executeAction(cTID('Hd  '), desc1, dialogMode);
    };

    // Select
    function step23(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Levels
    function step24(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
        var list1 = new ActionList();
        var desc2 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Ordn'), cTID('Trgt'));
        desc2.putReference(cTID('Chnl'), ref1);
        var list2 = new ActionList();
        list2.putInteger(63);
        list2.putInteger(208);
        desc2.putList(cTID('Inpt'), list2);
        desc2.putDouble(cTID('Gmm '), 0.71);
        list1.putObject(cTID('LvlA'), desc2);
        desc1.putList(cTID('Adjs'), list1);
        executeAction(cTID('Lvls'), desc1, dialogMode);
    };

    // Select
    function step25(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Set
    function step26(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
        var desc3 = new ActionDescriptor();
        desc3.putBoolean(cTID('enab'), true);
        desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
        desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
        var desc4 = new ActionDescriptor();
        desc4.putDouble(cTID('Rd  '), 0);
        desc4.putDouble(cTID('Grn '), 30.2918282523751);
        desc4.putDouble(cTID('Bl  '), 143.00000667572);
        desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
        desc2.putObject(cTID('SoFi'), cTID('SoFi'), desc3);
        desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Hide
    function step27(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putClass(cTID('SoFi'));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        list1.putReference(ref1);
        desc1.putList(cTID('null'), list1);
        executeAction(cTID('Hd  '), desc1, dialogMode);
    };

    // Select
    function step29(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Hide
    function step30(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putClass(cTID('SoFi'));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        list1.putReference(ref1);
        desc1.putList(cTID('null'), list1);
        executeAction(cTID('Hd  '), desc1, dialogMode);
    };

    // Show
    function step31(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        list1.putReference(ref1);
        desc1.putList(cTID('null'), list1);
        executeAction(cTID('Shw '), desc1, dialogMode);
    };

    // Show
    function step32(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putClass(cTID('SoFi'));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        list1.putReference(ref1);
        desc1.putList(cTID('null'), list1);
        executeAction(cTID('Shw '), desc1, dialogMode);
    };

    // Set
    function step33(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
        var desc3 = new ActionDescriptor();
        desc3.putBoolean(cTID('enab'), true);
        desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
        desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
        var desc4 = new ActionDescriptor();
        desc4.putDouble(cTID('Rd  '), 255);
        desc4.putDouble(cTID('Grn '), 250.941635370255);
        desc4.putDouble(cTID('Bl  '), 140.000006854534);
        desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
        desc2.putObject(cTID('SoFi'), cTID('SoFi'), desc3);
        desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Select
    function step35(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), sTID("RGB"));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Set
    function step36(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID('Prpr'), cTID('Lefx'));
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID('Scl '), cTID('#Prc'), 100);
        var desc3 = new ActionDescriptor();
        desc3.putBoolean(cTID('enab'), true);
        desc3.putBoolean(sTID("present"), true);
        desc3.putBoolean(sTID("showInDialog"), true);
        desc3.putEnumerated(cTID('Md  '), cTID('BlnM'), cTID('Nrml'));
        var desc4 = new ActionDescriptor();
        desc4.putDouble(cTID('Rd  '), 0);
        desc4.putDouble(cTID('Grn '), 0);
        desc4.putDouble(cTID('Bl  '), 0);
        desc3.putObject(cTID('Clr '), sTID("RGBColor"), desc4);
        desc3.putUnitDouble(cTID('Opct'), cTID('#Prc'), 100);
        desc2.putObject(cTID('SoFi'), cTID('SoFi'), desc3);
        desc1.putObject(cTID('T   '), cTID('Lefx'), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Rasterize
    function step38(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc5 = new ActionDescriptor();
        var ref4 = new ActionReference();
        ref4.putEnumerated(charIDToTypeID("Lyr "), charIDToTypeID("Ordn"), charIDToTypeID("Trgt"));
        desc5.putReference(charIDToTypeID("null"), ref4);
        desc5.putEnumerated(charIDToTypeID("What"), stringIDToTypeID("rasterizeItem"), stringIDToTypeID("layerStyle"));
        executeAction(stringIDToTypeID("rasterizeLayer"), desc5, dialogMode);
    };

    step3();      // Convert to Smart Object
    step5();      // Rasterize
    step6();      // Select
    step13();      // Make
    step14();      // Apply Image
    step15();      // Select
    step16();      // Invert
    step20();      // Set
    step21();      // Hide
    step23();      // Select
    step24();      // Levels
    step25();      // Select
    step26();      // Set
    step27();      // Hide
    step29();      // Select
    step31();      // Show
    step32();      // Show
    step33();      // Set
    step35();      // Select
    step36();      // Set
    step38();      // Rasterize
};