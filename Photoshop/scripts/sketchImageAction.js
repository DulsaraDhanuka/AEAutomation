cTID = function (s) {
    return app.charIDToTypeID(s);
};
sTID = function (s) {
    return app.stringIDToTypeID(s);
};

function sketchImageAction() {
    function step1(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step2(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(sTID("copyToLayer"), undefined, dialogMode);
    }

    function step3(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step4(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(cTID("Dlt "), desc1, dialogMode);
    }

    function step5(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("BckL"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("Usng"), ref2);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step6(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "brush");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step7(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step8(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step9(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Clr "), cTID("Clrs"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(cTID("Rset"), desc1, dialogMode);
    }

    function step10(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("null"), cTID("PrgI"), cTID("Al  "));
        executeAction(cTID("Prge"), desc1, dialogMode);
    }

    function step11(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "brush");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step12(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Shw "), desc1, dialogMode);
    }

    function step13(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step14(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "brush");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step15(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step16(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(sTID("smartBrushRadius"), 0);
        desc1.putInteger(sTID("smartBrushSmooth"), 5);
        desc1.putUnitDouble(sTID("smartBrushFeather"), cTID("#Pxl"), 5);
        desc1.putUnitDouble(sTID("smartBrushContrast"), cTID("#Prc"), 100);
        desc1.putUnitDouble(sTID("smartBrushShiftEdge"), cTID("#Prc"), 0);
        desc1.putBoolean(sTID("sampleAllLayers"), false);
        desc1.putBoolean(sTID("smartBrushUseSmartRadius"), false);
        desc1.putBoolean(sTID("smartBrushDecontaminate"), false);
        desc1.putUnitDouble(sTID("smartBrushDeconAmount"), cTID("#Prc"), 100);
        desc1.putEnumerated(sTID("refineEdgeOutput"), sTID("refineEdgeOutput"), sTID("selectionOutputToSelection"));
        executeAction(sTID("smartBrushWorkspace"), desc1, dialogMode);
    }

    function step17(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(sTID("copyToLayer"), undefined, dialogMode);
    }

    function step18(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step19(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step20(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(sTID("contentLayer"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        var desc3 = new ActionDescriptor();
        var desc4 = new ActionDescriptor();
        desc4.putDouble(cTID("Rd  "), 255);
        desc4.putDouble(cTID("Grn "), 255);
        desc4.putDouble(cTID("Bl  "), 255);
        desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
        desc2.putObject(cTID("Type"), sTID("solidColorLayer"), desc3);
        desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step21(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Color Fill 1");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step22(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(6653);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step23(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 75);
        desc2.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 50);
        desc2.putInteger(cTID("Rds "), 50);
        desc1.putObject(cTID("sdwM"), sTID("adaptCorrectTones"), desc2);
        var desc3 = new ActionDescriptor();
        desc3.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 50);
        desc3.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 30);
        desc3.putInteger(cTID("Rds "), 10);
        desc1.putObject(cTID("hglM"), sTID("adaptCorrectTones"), desc3);
        desc1.putDouble(cTID("BlcC"), 0.01);
        desc1.putDouble(cTID("WhtC"), 0.01);
        desc1.putInteger(cTID("Cntr"), 50);
        desc1.putInteger(cTID("ClrC"), 75);
        executeAction(sTID("adaptCorrect"), desc1, dialogMode);
    }

    function step24(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(655);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step25(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step26(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step27(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(655);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step28(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step29(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(687);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step30(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("GEfk"), cTID("GEft"), cTID("AccE"));
        desc1.putInteger(cTID("EdgW"), 14);
        desc1.putInteger(cTID("EdgB"), 25);
        desc1.putInteger(cTID("Smth"), 10);
        executeAction(1195730531, desc1, dialogMode);
    }

    function step31(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 500);
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 10);
        desc1.putInteger(cTID("Thsh"), 20);
        executeAction(sTID("unsharpMask"), desc1, dialogMode);
    }

    function step32(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 20);
        desc1.putInteger(cTID("Thsh"), 20);
        executeAction(sTID("surfaceBlur"), desc1, dialogMode);
    }

    function step33(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(sTID("lightingOn"), false);
        desc1.putDouble(sTID("stylization"), 5);
        desc1.putDouble(sTID("brushScale"), 0.1);
        desc1.putDouble(sTID("microBrush"), 0);
        desc1.putInteger(cTID("LghD"), -60);
        desc1.putDouble(sTID("specularity"), 1.3);
        desc1.putDouble(sTID("cleanliness"), 5);
        executeAction(sTID("oilPaint"), desc1, dialogMode);
    }

    function step34(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("GEfk"), cTID("GEft"), cTID("Ct  "));
        desc2.putInteger(cTID("NmbL"), 7);
        desc2.putInteger(cTID("EdgS"), 5);
        desc2.putInteger(cTID("EdgF"), 1);
        list1.putObject(cTID("GEfc"), desc2);
        var desc3 = new ActionDescriptor();
        desc3.putEnumerated(cTID("GEfk"), cTID("GEft"), cTID("Ct  "));
        desc3.putInteger(cTID("NmbL"), 7);
        desc3.putInteger(cTID("EdgS"), 5);
        desc3.putInteger(cTID("EdgF"), 1);
        list1.putObject(cTID("GEfc"), desc3);
        desc1.putList(cTID("GEfs"), list1);
        executeAction(1195730531, desc1, dialogMode);
    }

    function step35(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(sTID("lightingOn"), false);
        desc1.putDouble(sTID("stylization"), 5);
        desc1.putDouble(sTID("brushScale"), 0.1);
        desc1.putDouble(sTID("microBrush"), 0);
        desc1.putInteger(cTID("LghD"), -60);
        desc1.putDouble(sTID("specularity"), 1.3);
        desc1.putDouble(sTID("cleanliness"), 5);
        executeAction(sTID("oilPaint"), desc1, dialogMode);
    }

    function step36(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 500);
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
        desc1.putInteger(cTID("Thsh"), 10);
        executeAction(sTID("unsharpMask"), desc1, dialogMode);
    }

    function step37(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(855);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step38(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Shw "), desc1, dialogMode);
    }

    function step39(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 500);
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 10);
        desc1.putInteger(cTID("Thsh"), 20);
        executeAction(sTID("unsharpMask"), desc1, dialogMode);
    }

    function step40(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 20);
        desc1.putInteger(cTID("Thsh"), 20);
        executeAction(sTID("surfaceBlur"), desc1, dialogMode);
    }

    function step41(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(sTID("lightingOn"), false);
        desc1.putDouble(sTID("stylization"), 5);
        desc1.putDouble(sTID("brushScale"), 0.1);
        desc1.putDouble(sTID("microBrush"), 0);
        desc1.putInteger(cTID("LghD"), -60);
        desc1.putDouble(sTID("specularity"), 1.3);
        desc1.putDouble(sTID("cleanliness"), 5);
        executeAction(sTID("oilPaint"), desc1, dialogMode);
    }

    function step42(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("GEfk"), cTID("GEft"), cTID("Ct  "));
        desc2.putInteger(cTID("NmbL"), 7);
        desc2.putInteger(cTID("EdgS"), 5);
        desc2.putInteger(cTID("EdgF"), 1);
        list1.putObject(cTID("GEfc"), desc2);
        var desc3 = new ActionDescriptor();
        desc3.putEnumerated(cTID("GEfk"), cTID("GEft"), cTID("Ct  "));
        desc3.putInteger(cTID("NmbL"), 7);
        desc3.putInteger(cTID("EdgS"), 5);
        desc3.putInteger(cTID("EdgF"), 1);
        list1.putObject(cTID("GEfc"), desc3);
        desc1.putList(cTID("GEfs"), list1);
        executeAction(1195730531, desc1, dialogMode);
    }

    function step43(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(sTID("lightingOn"), false);
        desc1.putDouble(sTID("stylization"), 5);
        desc1.putDouble(sTID("brushScale"), 0.1);
        desc1.putDouble(sTID("microBrush"), 0);
        desc1.putInteger(cTID("LghD"), -60);
        desc1.putDouble(sTID("specularity"), 1.3);
        desc1.putDouble(sTID("cleanliness"), 5);
        executeAction(sTID("oilPaint"), desc1, dialogMode);
    }

    function step44(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 500);
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
        desc1.putInteger(cTID("Thsh"), 10);
        executeAction(sTID("unsharpMask"), desc1, dialogMode);
    }

    function step45(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("SftL"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step46(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 3);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(855);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step47(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step48(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(655);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step49(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Shw "), desc1, dialogMode);
    }

    function step50(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("GEfk"), cTID("GEft"), cTID("Phtc"));
        desc1.putInteger(cTID("Dtl "), 10);
        desc1.putInteger(cTID("Drkn"), 5);
        executeAction(1195730531, desc1, dialogMode);
    }

    function step51(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 20);
        desc1.putInteger(cTID("Thsh"), 20);
        executeAction(sTID("surfaceBlur"), desc1, dialogMode);
    }

    function step52(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(sTID("lightingOn"), false);
        desc1.putDouble(sTID("stylization"), 5);
        desc1.putDouble(sTID("brushScale"), 0.1);
        desc1.putDouble(sTID("microBrush"), 0);
        desc1.putInteger(cTID("LghD"), -60);
        desc1.putDouble(sTID("specularity"), 1.3);
        desc1.putDouble(sTID("cleanliness"), 5);
        executeAction(sTID("oilPaint"), desc1, dialogMode);
    }

    function step53(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Lvl "), 128);
        executeAction(cTID("Thrs"), desc1, dialogMode);
    }

    function step54(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(sTID("lightingOn"), false);
        desc1.putDouble(sTID("stylization"), 5);
        desc1.putDouble(sTID("brushScale"), 0.1);
        desc1.putDouble(sTID("microBrush"), 0);
        desc1.putInteger(cTID("LghD"), -60);
        desc1.putDouble(sTID("specularity"), 1.3);
        desc1.putDouble(sTID("cleanliness"), 5);
        executeAction(sTID("oilPaint"), desc1, dialogMode);
    }

    function step55(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 500);
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
        desc1.putInteger(cTID("Thsh"), 0);
        executeAction(sTID("unsharpMask"), desc1, dialogMode);
    }

    function step56(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step57(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step58(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        ref2.putName(cTID("Lyr "), "Layer 1 copy");
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step59(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(sTID("copyToLayer"), undefined, dialogMode);
    }

    function step60(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step61(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 5);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(6780);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step62(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 20);
        executeAction(sTID("highPass"), desc1, dialogMode);
    }

    function step63(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
        desc1.putBoolean(cTID("Clrz"), false);
        var list1 = new ActionList();
        var desc2 = new ActionDescriptor();
        desc2.putInteger(cTID("H   "), 0);
        desc2.putInteger(cTID("Strt"), -100);
        desc2.putInteger(cTID("Lght"), 0);
        list1.putObject(cTID("Hst2"), desc2);
        desc1.putList(cTID("Adjs"), list1);
        executeAction(sTID("hueSaturation"), desc1, dialogMode);
    }

    function step64(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 500);
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 20);
        desc1.putInteger(cTID("Thsh"), 80);
        executeAction(sTID("unsharpMask"), desc1, dialogMode);
    }

    function step65(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
        var list1 = new ActionList();
        var desc2 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
        desc2.putReference(cTID("Chnl"), ref1);
        var list2 = new ActionList();
        list2.putInteger(124);
        list2.putInteger(255);
        desc2.putList(cTID("Inpt"), list2);
        list1.putObject(cTID("LvlA"), desc2);
        desc1.putList(cTID("Adjs"), list1);
        executeAction(cTID("Lvls"), desc1, dialogMode);
    }

    function step66(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Lvl "), 128);
        executeAction(cTID("Thrs"), desc1, dialogMode);
    }

    function step67(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("GEfk"), cTID("GEft"), cTID("Ct  "));
        desc1.putInteger(cTID("NmbL"), 7);
        desc1.putInteger(cTID("EdgS"), 4);
        desc1.putInteger(cTID("EdgF"), 2);
        executeAction(1195730531, desc1, dialogMode);
    }

    function step68(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(sTID("lightingOn"), false);
        desc1.putDouble(sTID("stylization"), 5);
        desc1.putDouble(sTID("brushScale"), 0.1);
        desc1.putDouble(sTID("microBrush"), 0);
        desc1.putInteger(cTID("LghD"), -60);
        desc1.putDouble(sTID("specularity"), 1.3);
        desc1.putDouble(sTID("cleanliness"), 5);
        executeAction(sTID("oilPaint"), desc1, dialogMode);
    }

    function step69(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 500);
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 1);
        desc1.putInteger(cTID("Thsh"), 0);
        executeAction(sTID("unsharpMask"), desc1, dialogMode);
    }

    function step70(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Scrn"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step71(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 5);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(860);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step72(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 22");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step73(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step74(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1820);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step75(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1825);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step76(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step77(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 2);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1825);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step78(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step79(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 2");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step80(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Lvl "), 128);
        executeAction(cTID("Thrs"), desc1, dialogMode);
    }

    function step81(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("Lyr "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("LyrI"), 1826);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step82(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step83(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 2);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1826);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step84(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("BckC"));
        executeAction(cTID("Fl  "), desc1, dialogMode);
    }

    function step85(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1826);
        list1.putInteger(1825);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step86(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step87(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step88(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("Lyr "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("LyrI"), 1827);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step89(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step90(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("BckC"));
        executeAction(cTID("Fl  "), desc1, dialogMode);
    }

    function step91(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(cTID("Clds"), desc1, dialogMode);
    }

    function step92(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Lvl "), 128);
        executeAction(cTID("Thrs"), desc1, dialogMode);
    }

    function step93(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 8);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1827);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step94(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Shdw"));
        desc1.putInteger(sTID("shadowsFuzziness"), 20);
        desc1.putInteger(sTID("shadowsUpperLimit"), 65);
        desc1.putInteger(sTID("colorModel"), 0);
        executeAction(sTID("colorRange"), desc1, dialogMode);
    }

    function step95(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var list1 = new ActionList();
        list1.putInteger(1827);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("Dlt "), desc1, dialogMode);
    }

    function step96(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1825);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step97(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlS"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step98(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step99(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Shw "), desc1, dialogMode);
    }

    function step100(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 2");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Shw "), desc1, dialogMode);
    }

    function step101(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step102(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(946);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step103(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(943);
        list1.putInteger(946);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step104(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(951);
        list1.putInteger(952);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step105(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step106(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step107(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 50);
        executeAction(sTID("gaussianBlur"), desc1, dialogMode);
    }

    function step108(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(953);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step109(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(954);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step110(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(955);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step111(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(956);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step112(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step113(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 5");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(952);
        list1.putInteger(953);
        list1.putInteger(954);
        list1.putInteger(955);
        list1.putInteger(956);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step114(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step115(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step116(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(957);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step117(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(958);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step118(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(959);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step119(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(960);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step120(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 13");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step121(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 9");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(956);
        list1.putInteger(957);
        list1.putInteger(958);
        list1.putInteger(959);
        list1.putInteger(960);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step122(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step123(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 13");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step124(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(961);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step125(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(962);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step126(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(963);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step127(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(964);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step128(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 17");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step129(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 13");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(960);
        list1.putInteger(961);
        list1.putInteger(962);
        list1.putInteger(963);
        list1.putInteger(964);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step130(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step131(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 17");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step132(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 25);
        executeAction(sTID("gaussianBlur"), desc1, dialogMode);
    }

    function step133(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 3);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(964);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step134(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(sTID("groupEvent"), desc1, dialogMode);
    }

    function step135(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Scrn"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step136(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step137(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1936);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step138(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1953);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step139(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step140(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 17");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1952);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step141(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step142(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(sTID("groupEvent"), desc1, dialogMode);
    }

    function step143(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 4");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1953);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step144(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Rds "), 100);
        desc1.putInteger(cTID("Ang1"), 100);
        desc1.putInteger(cTID("Ang2"), 100);
        desc1.putInteger(cTID("Ang3"), 100);
        desc1.putInteger(cTID("Ang4"), 100);
        executeAction(sTID("colorHalftone"), desc1, dialogMode);
    }

    function step145(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1936);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step146(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Rds "), 50);
        desc1.putInteger(cTID("Ang1"), 50);
        desc1.putInteger(cTID("Ang2"), 50);
        desc1.putInteger(cTID("Ang3"), 50);
        desc1.putInteger(cTID("Ang4"), 50);
        executeAction(sTID("colorHalftone"), desc1, dialogMode);
    }

    function step147(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step148(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 4");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2037);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step149(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step150(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2020);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step151(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step152(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 4");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2037);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step153(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Wvtp"), cTID("Wvtp"), cTID("WvSn"));
        desc1.putInteger(cTID("NmbG"), 5);
        desc1.putInteger(cTID("WLMn"), 10);
        desc1.putInteger(cTID("WLMx"), 360);
        desc1.putInteger(cTID("AmMn"), 5);
        desc1.putInteger(cTID("AmMx"), 120);
        desc1.putInteger(cTID("SclH"), 100);
        desc1.putInteger(cTID("SclV"), 100);
        desc1.putEnumerated(cTID("UndA"), cTID("UndA"), cTID("RptE"));
        desc1.putInteger(cTID("RndS"), 4501518);
        executeAction(cTID("Wave"), desc1, dialogMode);
    }

    function step154(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1049);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step155(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Wvtp"), cTID("Wvtp"), cTID("WvSn"));
        desc1.putInteger(cTID("NmbG"), 5);
        desc1.putInteger(cTID("WLMn"), 10);
        desc1.putInteger(cTID("WLMx"), 100);
        desc1.putInteger(cTID("AmMn"), 1);
        desc1.putInteger(cTID("AmMx"), 10);
        desc1.putInteger(cTID("SclH"), 100);
        desc1.putInteger(cTID("SclV"), 100);
        desc1.putEnumerated(cTID("UndA"), cTID("UndA"), cTID("RptE"));
        desc1.putInteger(cTID("RndS"), 4501518);
        executeAction(cTID("Wave"), desc1, dialogMode);
    }

    function step156(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 17");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2126);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step157(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(2128);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step158(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 18");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step159(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 3);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(2128);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step160(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(sTID("groupEvent"), desc1, dialogMode);
    }

    function step161(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        ref1.putName(cTID("Lyr "), "Layer 1 copy 4");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step162(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putBoolean(cTID("UsrM"), false);
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step163(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step164(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putBoolean(cTID("UsrM"), false);
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step165(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 18");
        ref1.putName(cTID("Lyr "), "Layer 1 copy 4");
        ref1.putName(cTID("Lyr "), "Layer 1 copy 17");
        ref1.putName(cTID("Lyr "), "Layer 1");
        ref1.putName(cTID("Lyr "), "Layer 1 copy 2");
        ref1.putName(cTID("Lyr "), "Layer 22");
        ref1.putName(cTID("Lyr "), "Layer 1 copy");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step166(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step167(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Hghl"));
        desc1.putInteger(sTID("highlightsFuzziness"), 20);
        desc1.putInteger(sTID("highlightsLowerLimit"), 190);
        desc1.putInteger(sTID("colorModel"), 0);
        executeAction(sTID("colorRange"), desc1, dialogMode);
    }

    function step168(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(cTID("Dlt "), undefined, dialogMode);
    }

    function step169(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step170(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step171(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step172(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 4");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Shw "), desc1, dialogMode);
    }

    function step173(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 4");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2127);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step174(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Clrs"), cTID("Clrs"), cTID("Hghl"));
        desc1.putInteger(sTID("highlightsFuzziness"), 20);
        desc1.putInteger(sTID("highlightsLowerLimit"), 190);
        desc1.putInteger(sTID("colorModel"), 0);
        executeAction(sTID("colorRange"), desc1, dialogMode);
    }

    function step175(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(cTID("Dlt "), undefined, dialogMode);
    }

    function step176(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step177(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step178(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        ref1.putName(cTID("Lyr "), "Layer 1 copy 18");
        ref1.putName(cTID("Lyr "), "Layer 1 copy 17");
        ref1.putName(cTID("Lyr "), "Layer 1");
        ref1.putName(cTID("Lyr "), "Layer 1 copy 2");
        ref1.putName(cTID("Lyr "), "Layer 22");
        ref1.putName(cTID("Lyr "), "Layer 1 copy");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Shw "), desc1, dialogMode);
    }

    function step179(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step180(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1190);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step181(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step182(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("Lyr "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("LyrI"), 1414);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step183(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step184(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step185(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("FrgC"));
        desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
        executeAction(cTID("Fl  "), desc1, dialogMode);
    }

    function step186(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step187(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("ClSz"), cTID("#Pxl"), 100);
        executeAction(cTID("Msc "), desc1, dialogMode);
    }

    function step188(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1415);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step189(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step190(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step191(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1414);
        list1.putInteger(1415);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step192(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step193(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step194(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step195(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1416);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step196(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step197(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step198(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1415);
        list1.putInteger(1416);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step199(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step200(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step201(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step202(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1417);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step203(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step204(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step205(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1416);
        list1.putInteger(1417);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step206(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step207(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step208(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step209(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1418);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step210(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step211(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step212(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1417);
        list1.putInteger(1418);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step213(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step214(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step215(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step216(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1419);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step217(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step218(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step219(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 4");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1418);
        list1.putInteger(1419);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step220(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step221(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step222(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step223(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1420);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step224(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step225(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step226(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step227(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 5");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1419);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step228(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Angl"), 0);
        desc1.putUnitDouble(cTID("Dstn"), cTID("#Pxl"), 2000);
        executeAction(sTID("motionBlur"), desc1, dialogMode);
    }

    function step229(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Angl"), 0);
        desc1.putUnitDouble(cTID("Dstn"), cTID("#Pxl"), 2000);
        executeAction(sTID("motionBlur"), desc1, dialogMode);
    }

    function step230(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Angl"), 0);
        desc1.putUnitDouble(cTID("Dstn"), cTID("#Pxl"), 2000);
        executeAction(sTID("motionBlur"), desc1, dialogMode);
    }

    function step231(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1421);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step232(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step233(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step234(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 5");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1419);
        list1.putInteger(1421);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step235(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step236(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step237(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step238(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1422);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step239(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step240(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step241(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 7");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1421);
        list1.putInteger(1422);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step242(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step243(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step244(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step245(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1423);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step246(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step247(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step248(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 8");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1422);
        list1.putInteger(1423);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step249(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step250(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step251(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step252(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1424);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step253(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 10");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step254(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 10");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step255(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 9");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1423);
        list1.putInteger(1424);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step256(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step257(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 10");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step258(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 10");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step259(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1425);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step260(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 11");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step261(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 11");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step262(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 10");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1424);
        list1.putInteger(1425);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step263(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step264(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 11");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step265(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 11");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step266(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step267(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(sTID("smartBrushRadius"), 0);
        desc1.putInteger(sTID("smartBrushSmooth"), 0);
        desc1.putUnitDouble(sTID("smartBrushFeather"), cTID("#Pxl"), 0);
        desc1.putUnitDouble(sTID("smartBrushContrast"), cTID("#Prc"), 100);
        desc1.putUnitDouble(sTID("smartBrushShiftEdge"), cTID("#Prc"), 100);
        desc1.putBoolean(sTID("sampleAllLayers"), false);
        desc1.putBoolean(sTID("smartBrushUseSmartRadius"), false);
        desc1.putBoolean(sTID("smartBrushDecontaminate"), false);
        desc1.putUnitDouble(sTID("smartBrushDeconAmount"), cTID("#Prc"), 100);
        desc1.putEnumerated(sTID("refineEdgeOutput"), sTID("refineEdgeOutput"), sTID("selectionOutputToSelection"));
        executeAction(sTID("smartBrushWorkspace"), desc1, dialogMode);
    }

    function step268(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("FrgC"));
        desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
        executeAction(cTID("Fl  "), desc1, dialogMode);
    }

    function step269(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step270(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step271(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 6");
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Shw "), desc1, dialogMode);
    }

    function step272(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 6");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1420);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step273(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Angl"), 90);
        desc1.putUnitDouble(cTID("Dstn"), cTID("#Pxl"), 2000);
        executeAction(sTID("motionBlur"), desc1, dialogMode);
    }

    function step274(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1426);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step275(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step276(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step277(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 6");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1420);
        list1.putInteger(1426);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step278(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step279(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step280(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step281(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1427);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step282(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step283(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step284(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 7");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1426);
        list1.putInteger(1427);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step285(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step286(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step287(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step288(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1428);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step289(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step290(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step291(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 8");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1427);
        list1.putInteger(1428);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step292(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step293(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step294(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step295(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1429);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step296(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 10");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step297(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 10");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step298(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 9");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1428);
        list1.putInteger(1429);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step299(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step300(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 10");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step301(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 10");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step302(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1430);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step303(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 12");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step304(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 12");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step305(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 10");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1429);
        list1.putInteger(1430);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step306(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step307(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 12");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step308(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 12");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step309(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step310(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(sTID("smartBrushRadius"), 0);
        desc1.putInteger(sTID("smartBrushSmooth"), 0);
        desc1.putUnitDouble(sTID("smartBrushFeather"), cTID("#Pxl"), 0);
        desc1.putUnitDouble(sTID("smartBrushContrast"), cTID("#Prc"), 100);
        desc1.putUnitDouble(sTID("smartBrushShiftEdge"), cTID("#Prc"), 100);
        desc1.putBoolean(sTID("sampleAllLayers"), false);
        desc1.putBoolean(sTID("smartBrushUseSmartRadius"), false);
        desc1.putBoolean(sTID("smartBrushDecontaminate"), false);
        desc1.putUnitDouble(sTID("smartBrushDeconAmount"), cTID("#Prc"), 100);
        desc1.putEnumerated(sTID("refineEdgeOutput"), sTID("refineEdgeOutput"), sTID("selectionOutputToSelection"));
        executeAction(sTID("smartBrushWorkspace"), desc1, dialogMode);
    }

    function step311(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("FrgC"));
        desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
        executeAction(cTID("Fl  "), desc1, dialogMode);
    }

    function step312(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step313(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        ref2.putName(cTID("Lyr "), "Layer 2 copy 11");
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step314(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(sTID("copyToLayer"), undefined, dialogMode);
    }

    function step315(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step316(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step317(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 12");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1430);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step318(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 11");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1425);
        list1.putInteger(1430);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step319(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var list1 = new ActionList();
        list1.putInteger(1425);
        list1.putInteger(1430);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("Dlt "), desc1, dialogMode);
    }

    function step320(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1431);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step321(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(356);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step322(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step323(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step324(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Angl"), 90);
        desc1.putUnitDouble(cTID("Dstn"), cTID("#Pxl"), 2000);
        executeAction(sTID("motionBlur"), desc1, dialogMode);
    }

    function step325(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(357);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step326(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step327(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step328(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(358);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step329(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step330(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step331(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(359);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step332(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step333(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step334(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(360);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step335(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step336(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step337(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(356);
        list1.putInteger(357);
        list1.putInteger(358);
        list1.putInteger(359);
        list1.putInteger(360);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step338(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step339(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step340(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step341(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(361);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step342(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step343(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step344(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(362);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step345(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step346(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step347(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 5");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(360);
        list1.putInteger(361);
        list1.putInteger(362);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step348(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step349(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step350(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step351(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var list1 = new ActionList();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        list1.putReference(ref1);
        desc1.putList(cTID("null"), list1);
        executeAction(cTID("Hd  "), desc1, dialogMode);
    }

    function step352(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(355);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step353(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(cTID("Angl"), 0);
        desc1.putUnitDouble(cTID("Dstn"), cTID("#Pxl"), 2000);
        executeAction(sTID("motionBlur"), desc1, dialogMode);
    }

    function step354(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(363);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step355(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step356(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step357(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(364);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step358(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step359(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step360(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(365);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step361(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step362(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step363(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(366);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step364(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step365(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step366(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(355);
        list1.putInteger(363);
        list1.putInteger(364);
        list1.putInteger(365);
        list1.putInteger(366);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step367(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step368(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step369(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step370(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(367);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step371(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step372(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step373(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(368);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step374(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step375(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step376(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 4");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(366);
        list1.putInteger(367);
        list1.putInteger(368);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step377(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step378(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step379(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step380(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        ref2.putName(cTID("Lyr "), "Layer 2 copy 7");
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step381(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(sTID("copyToLayer"), undefined, dialogMode);
    }

    function step382(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step383(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step384(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 7");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(362);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step385(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 6");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelection"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(368);
        list1.putInteger(362);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step386(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var list1 = new ActionList();
        list1.putInteger(368);
        list1.putInteger(362);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("Dlt "), desc1, dialogMode);
    }

    function step387(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("FTcs"), cTID("QCSt"), sTID("QCSAverage"));
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID("Hrzn"), cTID("#Pxl"), -2.27373675443232E-13);
        desc2.putUnitDouble(cTID("Vrtc"), cTID("#Pxl"), 2.27373675443232E-13);
        desc1.putObject(cTID("Ofst"), cTID("Ofst"), desc2);
        desc1.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 85);
        desc1.putUnitDouble(cTID("Hght"), cTID("#Prc"), 85.0000023841858);
        desc1.putBoolean(cTID("Lnkd"), true);
        desc1.putEnumerated(cTID("Intr"), cTID("Intp"), cTID("Bcbc"));
        executeAction(cTID("Trnf"), desc1, dialogMode);
    }

    function step388(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(3629);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step389(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step390(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step391(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putUnitDouble(cTID("Angl"), cTID("#Ang"), 180);
        executeAction(cTID("Rtte"), desc1, dialogMode);
    }

    function step392(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(3629);
        list1.putInteger(3628);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step393(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step394(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step395(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(79);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step396(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step397(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(79);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step398(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 3");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step399(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(79);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step400(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 4");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step401(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(79);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step402(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step403(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(139);
        list1.putInteger(140);
        list1.putInteger(141);
        list1.putInteger(142);
        list1.putInteger(143);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step404(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step405(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step406(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(144);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step407(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 6");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step408(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(145);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step409(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 7");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step410(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(146);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step411(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 8");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step412(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(147);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step413(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step414(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2 copy 5");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(143);
        list1.putInteger(144);
        list1.putInteger(145);
        list1.putInteger(146);
        list1.putInteger(147);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step415(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step416(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2 copy 9");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step417(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step418(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putInteger(sTID("smartBrushRadius"), 0);
        desc1.putInteger(sTID("smartBrushSmooth"), 100);
        desc1.putUnitDouble(sTID("smartBrushFeather"), cTID("#Pxl"), 0);
        desc1.putUnitDouble(sTID("smartBrushContrast"), cTID("#Prc"), 100);
        desc1.putUnitDouble(sTID("smartBrushShiftEdge"), cTID("#Prc"), 0);
        desc1.putBoolean(sTID("sampleAllLayers"), false);
        desc1.putBoolean(sTID("smartBrushUseSmartRadius"), false);
        desc1.putBoolean(sTID("smartBrushDecontaminate"), false);
        desc1.putUnitDouble(sTID("smartBrushDeconAmount"), cTID("#Prc"), 100);
        desc1.putEnumerated(sTID("refineEdgeOutput"), sTID("refineEdgeOutput"), sTID("selectionOutputToSelection"));
        executeAction(sTID("smartBrushWorkspace"), desc1, dialogMode);
    }

    function step419(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var list1 = new ActionList();
        list1.putInteger(147);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("Dlt "), desc1, dialogMode);
    }

    function step420(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("Lyr "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("LyrI"), 148);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step421(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step422(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("FrgC"));
        desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
        executeAction(cTID("Fl  "), desc1, dialogMode);
    }

    function step423(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step424(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step425(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 2);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(1363);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step426(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Wvtp"), cTID("Wvtp"), cTID("WvSn"));
        desc1.putInteger(cTID("NmbG"), 5);
        desc1.putInteger(cTID("WLMn"), 10);
        desc1.putInteger(cTID("WLMx"), 360);
        desc1.putInteger(cTID("AmMn"), 1);
        desc1.putInteger(cTID("AmMx"), 30);
        desc1.putInteger(cTID("SclH"), 100);
        desc1.putInteger(cTID("SclV"), 100);
        desc1.putEnumerated(cTID("UndA"), cTID("UndA"), cTID("RptE"));
        desc1.putInteger(cTID("RndS"), 4501518);
        executeAction(cTID("Wave"), desc1, dialogMode);
    }

    function step427(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(sTID("contentLayer"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        var desc3 = new ActionDescriptor();
        var desc4 = new ActionDescriptor();
        desc4.putDouble(cTID("Rd  "), 255);
        desc4.putDouble(cTID("Grn "), 192.000003755093);
        desc4.putDouble(cTID("Bl  "), 0);
        desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
        desc2.putObject(cTID("Type"), sTID("solidColorLayer"), desc3);
        desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step428(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Color Fill 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step429(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(sTID("groupEvent"), desc1, dialogMode);
    }

    function step430(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step431(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(cTID("Dlt "), desc1, dialogMode);
    }

    function step432(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(sTID("contentLayer"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        var desc3 = new ActionDescriptor();
        desc3.putUnitDouble(cTID("Angl"), cTID("#Ang"), -90);
        desc3.putEnumerated(cTID("Type"), cTID("GrdT"), cTID("Lnr "));
        var desc4 = new ActionDescriptor();
        desc4.putString(cTID("Nm  "), "Custom");
        desc4.putEnumerated(cTID("GrdF"), cTID("GrdF"), cTID("CstS"));
        desc4.putDouble(cTID("Intr"), 4096);
        var list1 = new ActionList();
        var desc5 = new ActionDescriptor();
        var desc6 = new ActionDescriptor();
        desc6.putDouble(cTID("Rd  "), 255);
        desc6.putDouble(cTID("Grn "), 110.264588445425);
        desc6.putDouble(cTID("Bl  "), 1.99999988079071);
        desc5.putObject(cTID("Clr "), sTID("RGBColor"), desc6);
        desc5.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
        desc5.putInteger(cTID("Lctn"), 0);
        desc5.putInteger(cTID("Mdpn"), 50);
        list1.putObject(cTID("Clrt"), desc5);
        var desc7 = new ActionDescriptor();
        var desc8 = new ActionDescriptor();
        desc8.putDouble(cTID("Rd  "), 255);
        desc8.putDouble(cTID("Grn "), 254.988327026367);
        desc8.putDouble(cTID("Bl  "), 0);
        desc7.putObject(cTID("Clr "), sTID("RGBColor"), desc8);
        desc7.putEnumerated(cTID("Type"), cTID("Clry"), cTID("UsrS"));
        desc7.putInteger(cTID("Lctn"), 4096);
        desc7.putInteger(cTID("Mdpn"), 50);
        list1.putObject(cTID("Clrt"), desc7);
        desc4.putList(cTID("Clrs"), list1);
        var list2 = new ActionList();
        var desc9 = new ActionDescriptor();
        desc9.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc9.putInteger(cTID("Lctn"), 0);
        desc9.putInteger(cTID("Mdpn"), 50);
        list2.putObject(cTID("TrnS"), desc9);
        var desc10 = new ActionDescriptor();
        desc10.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc10.putInteger(cTID("Lctn"), 4096);
        desc10.putInteger(cTID("Mdpn"), 50);
        list2.putObject(cTID("TrnS"), desc10);
        desc4.putList(cTID("Trns"), list2);
        desc3.putObject(cTID("Grad"), cTID("Grdn"), desc4);
        desc2.putObject(cTID("Type"), sTID("gradientLayer"), desc3);
        desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step433(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Gradient Fill 1");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step434(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(sTID("groupEvent"), desc1, dialogMode);
    }

    function step435(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(sTID("contentLayer"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        var desc3 = new ActionDescriptor();
        var desc4 = new ActionDescriptor();
        desc4.putString(cTID("Nm  "), "avatar_pat001");
        desc4.putString(cTID("Idnt"), "71e96e2b-2d28-d744-b795-5968670d75f1");
        desc3.putObject(cTID("Ptrn"), cTID("Ptrn"), desc4);
        desc2.putObject(cTID("Type"), sTID("patternLayer"), desc3);
        desc1.putObject(cTID("Usng"), sTID("contentLayer"), desc2);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step436(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Pattern Fill 1");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step437(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(sTID("groupEvent"), desc1, dialogMode);
    }

    function step438(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Mltp"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step439(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID("Opct"), cTID("#Prc"), 10);
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step440(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step441(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(cTID("Rltv"), true);
        desc1.putUnitDouble(cTID("Wdth"), cTID("#Pxl"), 500);
        desc1.putUnitDouble(cTID("Hght"), cTID("#Pxl"), 500);
        desc1.putEnumerated(cTID("Hrzn"), cTID("HrzL"), cTID("Cntr"));
        desc1.putEnumerated(cTID("Vrtc"), cTID("VrtL"), cTID("Cntr"));
        desc1.putEnumerated(sTID("canvasExtensionColorType"), sTID("canvasExtensionColorType"), cTID("BckC"));
        executeAction(sTID("canvasSize"), desc1, dialogMode);
    }

    function step442(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2634);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step443(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(2692);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step444(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step445(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 10);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(3071);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step446(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Prpr"), cTID("Lefx"));
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
        var desc3 = new ActionDescriptor();
        desc3.putBoolean(cTID("enab"), true);
        desc3.putBoolean(sTID("present"), true);
        desc3.putBoolean(sTID("showInDialog"), true);
        desc3.putEnumerated(cTID("Styl"), cTID("FStl"), cTID("OutF"));
        desc3.putEnumerated(cTID("PntT"), cTID("FrFl"), cTID("SClr"));
        desc3.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
        desc3.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc3.putUnitDouble(cTID("Sz  "), cTID("#Pxl"), 20);
        var desc4 = new ActionDescriptor();
        desc4.putDouble(cTID("Rd  "), 255);
        desc4.putDouble(cTID("Grn "), 255);
        desc4.putDouble(cTID("Bl  "), 255);
        desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
        desc3.putBoolean(sTID("overprint"), false);
        desc2.putObject(cTID("FrFX"), cTID("FrFX"), desc3);
        desc1.putObject(cTID("T   "), cTID("Lefx"), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step447(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(sTID("fillOpacity"), cTID("#Prc"), 0);
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step448(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Wvtp"), cTID("Wvtp"), cTID("WvSn"));
        desc1.putInteger(cTID("NmbG"), 5);
        desc1.putInteger(cTID("WLMn"), 10);
        desc1.putInteger(cTID("WLMx"), 360);
        desc1.putInteger(cTID("AmMn"), 1);
        desc1.putInteger(cTID("AmMx"), 30);
        desc1.putInteger(cTID("SclH"), 100);
        desc1.putInteger(cTID("SclV"), 100);
        desc1.putEnumerated(cTID("UndA"), cTID("UndA"), cTID("RptE"));
        desc1.putInteger(cTID("RndS"), 4501518);
        executeAction(cTID("Wave"), desc1, dialogMode);
    }

    function step449(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("Lyr "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("LyrI"), 2693);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step450(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step451(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 5");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2459);
        list1.putInteger(2460);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step452(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step453(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step454(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2840);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step455(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step456(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 23");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2897);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step457(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("FTcs"), cTID("QCSt"), sTID("QCSAverage"));
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID("Hrzn"), cTID("#Pxl"), 0);
        desc2.putUnitDouble(cTID("Vrtc"), cTID("#Pxl"), 0);
        desc1.putObject(cTID("Ofst"), cTID("Ofst"), desc2);
        desc1.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 99);
        desc1.putUnitDouble(cTID("Hght"), cTID("#Prc"), 99.0000009536743);
        desc1.putBoolean(cTID("Lnkd"), true);
        desc1.putEnumerated(cTID("Intr"), cTID("Intp"), cTID("Bcbc"));
        executeAction(cTID("Trnf"), desc1, dialogMode);
    }

    function step458(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(cTID("Invs"), undefined, dialogMode);
    }

    function step459(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlS"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step460(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 23");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step461(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2838);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step462(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(2898);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step463(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 5");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step464(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 11);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(3075);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step465(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(sTID("fillOpacity"), cTID("#Prc"), 0);
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step466(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Prpr"), cTID("Lefx"));
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID("Scl "), cTID("#Prc"), 416.666666666667);
        var desc3 = new ActionDescriptor();
        desc3.putBoolean(cTID("enab"), true);
        desc3.putBoolean(sTID("present"), true);
        desc3.putBoolean(sTID("showInDialog"), true);
        desc3.putEnumerated(cTID("Styl"), cTID("FStl"), cTID("OutF"));
        desc3.putEnumerated(cTID("PntT"), cTID("FrFl"), cTID("SClr"));
        desc3.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
        desc3.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc3.putUnitDouble(cTID("Sz  "), cTID("#Pxl"), 5);
        var desc4 = new ActionDescriptor();
        desc4.putDouble(cTID("Rd  "), 255);
        desc4.putDouble(cTID("Grn "), 255);
        desc4.putDouble(cTID("Bl  "), 255);
        desc3.putObject(cTID("Clr "), sTID("RGBColor"), desc4);
        desc3.putBoolean(sTID("overprint"), false);
        desc2.putObject(cTID("FrFX"), cTID("FrFX"), desc3);
        desc1.putObject(cTID("T   "), cTID("Lefx"), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step467(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Wvtp"), cTID("Wvtp"), cTID("WvSn"));
        desc1.putInteger(cTID("NmbG"), 5);
        desc1.putInteger(cTID("WLMn"), 10);
        desc1.putInteger(cTID("WLMx"), 400);
        desc1.putInteger(cTID("AmMn"), 1);
        desc1.putInteger(cTID("AmMx"), 30);
        desc1.putInteger(cTID("SclH"), 100);
        desc1.putInteger(cTID("SclV"), 100);
        desc1.putEnumerated(cTID("UndA"), cTID("UndA"), cTID("RptE"));
        desc1.putInteger(cTID("RndS"), 4501518);
        executeAction(cTID("Wave"), desc1, dialogMode);
    }

    function step468(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("Lyr "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("LyrI"), 2899);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step469(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 24");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step470(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 5");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2461);
        list1.putInteger(2462);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step471(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step472(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 24");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step473(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step474(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 24");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step475(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step476(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 24");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2462);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step477(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 16);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(2462);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step478(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 23");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(2460);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step479(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 15);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(2460);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step480(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putBoolean(cTID("Rltv"), true);
        desc1.putUnitDouble(cTID("Wdth"), cTID("#Pxl"), -500);
        desc1.putUnitDouble(cTID("Hght"), cTID("#Pxl"), -500);
        desc1.putEnumerated(cTID("Hrzn"), cTID("HrzL"), cTID("Cntr"));
        desc1.putEnumerated(cTID("Vrtc"), cTID("VrtL"), cTID("Cntr"));
        executeAction(sTID("canvasSize"), desc1, dialogMode);
    }

    function step481(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step482(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(233);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step483(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step484(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step485(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("Lyr "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("LyrI"), 241);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step486(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 25");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step487(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("FrgC"));
        desc1.putUnitDouble(cTID("Opct"), cTID("#Prc"), 100);
        desc1.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Nrml"));
        executeAction(cTID("Fl  "), desc1, dialogMode);
    }

    function step488(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step489(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step490(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 25");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step491(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(233);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step492(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step493(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step494(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Color Fill 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(234);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step495(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step496(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Color Fill 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step497(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 18");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(191);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step498(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step499(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 18");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step500(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 17");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(189);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step501(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step502(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 17");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step503(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(168);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step504(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step505(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step506(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(171);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step507(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step508(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step509(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 22");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(172);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step510(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step511(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 22");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step512(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(170);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step513(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step514(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Layer 1 copy");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step515(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Pattern Fill 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(236);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step516(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(233);
        list1.putInteger(234);
        list1.putInteger(235);
        list1.putInteger(236);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step517(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(sTID("layerSection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("From"), ref2);
        desc1.putInteger(sTID("layerSectionStart"), 242);
        desc1.putInteger(sTID("layerSectionEnd"), 243);
        desc1.putString(cTID("Nm  "), "Group 1");
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step518(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Group 1");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step519(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 24");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(240);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step520(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(173);
        list1.putInteger(191);
        list1.putInteger(190);
        list1.putInteger(189);
        list1.putInteger(168);
        list1.putInteger(171);
        list1.putInteger(172);
        list1.putInteger(170);
        list1.putInteger(238);
        list1.putInteger(240);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step521(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(sTID("layerSection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("From"), ref2);
        desc1.putInteger(sTID("layerSectionStart"), 244);
        desc1.putInteger(sTID("layerSectionEnd"), 245);
        desc1.putString(cTID("Nm  "), "Group 2");
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step522(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Group 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step523(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 25");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(241);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step524(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Default shape");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step525(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Color Fill 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(169);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step526(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Background color");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step527(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putBoolean(sTID("protectPosition"), true);
        desc1.putObject(sTID("layerLocking"), sTID("layerLocking"), desc2);
        executeAction(sTID("applyLocking"), desc1, dialogMode);
    }

    function step528(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Default shape");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(241);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step529(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putBoolean(sTID("protectPosition"), true);
        desc1.putObject(sTID("layerLocking"), sTID("layerLocking"), desc2);
        executeAction(sTID("applyLocking"), desc1, dialogMode);
    }

    function step530(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(233);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step531(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Current shape");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step532(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Color Fill 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(234);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step533(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Shape color");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step534(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Gradient Fill 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(235);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step535(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Shape gradient");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step536(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Pattern Fill 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(236);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step537(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Shape pattern");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step538(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Group 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(242);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step539(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "SHAPE");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step540(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step541(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "SHAPE");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step542(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 3");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(173);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step543(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Small drops");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step544(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 4");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(190);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step545(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Big drops");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step546(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 18");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(191);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step547(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Small drops color");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step548(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 17");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(189);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step549(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Big drops color");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step550(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 22");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(172);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step551(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "White sharp details");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step552(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(170);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step553(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Blask sharp details");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step554(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 23");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(238);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step555(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Thick outline");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step556(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 24");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(240);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step557(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Thin outline");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step558(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Blask sharp details");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(170);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step559(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Blask details");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step560(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "White sharp details");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(172);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step561(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "White details");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step562(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(168);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step563(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Main vector");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step564(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Layer 1 copy 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(171);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step565(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Detailed vector");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step566(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Group 2");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(244);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step567(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step568(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Group 2");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step569(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step570(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "OBJECT");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step571(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "SHAPE");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(242);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step572(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Orng"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step573(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "OBJECT");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(244);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step574(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Vlt "));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step575(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Blask details");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(170);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step576(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "White details");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(172);
        list1.putInteger(170);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step577(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Bl  "));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step578(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Detailed vector");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(171);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step579(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Main vector");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(168);
        list1.putInteger(171);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step580(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Grn "));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step581(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Big drops color");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(189);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step582(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Small drops");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(173);
        list1.putInteger(191);
        list1.putInteger(190);
        list1.putInteger(189);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step583(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Ylw "));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step584(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Background color");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(325);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step585(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Gry "));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step586(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Default shape");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(397);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step587(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Gry "));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step588(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step589(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Clr "), cTID("Clrs"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(cTID("Rset"), desc1, dialogMode);
    }

    function step590(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("null"), cTID("PrgI"), cTID("Al  "));
        executeAction(cTID("Prge"), desc1, dialogMode);
    }

    function step591(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Detailed vector");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(9);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step592(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step593(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step594(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(sTID("copyToLayer"), undefined, dialogMode);
    }

    function step595(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Temp");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step596(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 17);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(92);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step597(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Grn "));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step598(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Correct color");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step599(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step600(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step601(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 75);
        desc2.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 50);
        desc2.putInteger(cTID("Rds "), 50);
        desc1.putObject(cTID("sdwM"), sTID("adaptCorrectTones"), desc2);
        var desc3 = new ActionDescriptor();
        desc3.putUnitDouble(cTID("Amnt"), cTID("#Prc"), 50);
        desc3.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 30);
        desc3.putInteger(cTID("Rds "), 10);
        desc1.putObject(cTID("hglM"), sTID("adaptCorrectTones"), desc3);
        desc1.putDouble(cTID("BlcC"), 0.01);
        desc1.putDouble(cTID("WhtC"), 0.01);
        desc1.putInteger(cTID("Cntr"), 50);
        desc1.putInteger(cTID("ClrC"), 75);
        executeAction(sTID("adaptCorrect"), desc1, dialogMode);
    }

    function step602(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("GEfk"), cTID("GEft"), cTID("Spng"));
        desc1.putInteger(cTID("BrsS"), 0);
        desc1.putInteger(cTID("Dfnt"), 0);
        desc1.putInteger(cTID("Smth"), 15);
        executeAction(1195730531, desc1, dialogMode);
    }

    function step603(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putUnitDouble(cTID("Rds "), cTID("#Pxl"), 50);
        desc1.putInteger(cTID("Thsh"), 50);
        executeAction(sTID("surfaceBlur"), desc1, dialogMode);
    }

    function step604(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
        var list1 = new ActionList();
        var desc2 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Cmps"));
        desc2.putReference(cTID("Chnl"), ref1);
        var list2 = new ActionList();
        list2.putInteger(32);
        list2.putInteger(224);
        desc2.putList(cTID("Inpt"), list2);
        list1.putObject(cTID("LvlA"), desc2);
        desc1.putList(cTID("Adjs"), list1);
        executeAction(cTID("Lvls"), desc1, dialogMode);
    }

    function step605(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Md  "), cTID("BlnM"), cTID("Clr "));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step606(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Correct color");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(84);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step607(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Main vector");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(6);
        list1.putInteger(9);
        list1.putInteger(84);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step608(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(93);
        list1.putInteger(94);
        list1.putInteger(95);
        desc1.putList(cTID("Idnt"), list1);
        executeAction(cTID("Dplc"), desc1, dialogMode);
    }

    function step609(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step610(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Tone");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step611(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 23);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(95);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step612(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step613(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(cTID("Avrg"), undefined, dialogMode);
    }

    function step614(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step615(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("FTcs"), cTID("QCSt"), sTID("QCSAverage"));
        var desc2 = new ActionDescriptor();
        desc2.putUnitDouble(cTID("Hrzn"), cTID("#Pxl"), 0);
        desc2.putUnitDouble(cTID("Vrtc"), cTID("#Pxl"), 0);
        desc1.putObject(cTID("Ofst"), cTID("Ofst"), desc2);
        desc1.putUnitDouble(cTID("Wdth"), cTID("#Prc"), 500);
        desc1.putUnitDouble(cTID("Hght"), cTID("#Prc"), 500);
        desc1.putBoolean(cTID("Lnkd"), true);
        desc1.putEnumerated(cTID("Intr"), cTID("Intp"), cTID("Bcbc"));
        executeAction(cTID("Trnf"), desc1, dialogMode);
    }

    function step616(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(cTID("Lyr "));
        desc1.putReference(cTID("null"), ref1);
        desc1.putInteger(cTID("LyrI"), 96);
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step617(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Temp");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step618(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("Usng"), cTID("FlCn"), cTID("BckC"));
        executeAction(cTID("Fl  "), desc1, dialogMode);
    }

    function step619(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 22);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(96);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step620(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Tone");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(252);
        list1.putInteger(251);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step621(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        executeAction(sTID("mergeLayersNew"), desc1, dialogMode);
    }

    function step622(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(cTID("Avrg"), undefined, dialogMode);
    }

    function step623(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(sTID("presetKind"), sTID("presetKindType"), sTID("presetKindCustom"));
        desc1.putBoolean(cTID("Clrz"), false);
        var list1 = new ActionList();
        var desc2 = new ActionDescriptor();
        desc2.putInteger(cTID("H   "), 0);
        desc2.putInteger(cTID("Strt"), 75);
        desc2.putInteger(cTID("Lght"), 0);
        list1.putObject(cTID("Hst2"), desc2);
        desc1.putList(cTID("Adjs"), list1);
        executeAction(sTID("hueSaturation"), desc1, dialogMode);
    }

    function step624(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step625(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(cTID("copy"), undefined, dialogMode);
    }

    function step626(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("AntA"), cTID("Annt"), cTID("Anno"));
        desc1.putClass(cTID("As  "), cTID("Pxel"));
        executeAction(cTID("past"), desc1, dialogMode);
    }

    function step627(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Temp");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step628(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Tone");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(251);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step629(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var list1 = new ActionList();
        list1.putInteger(95);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("Dlt "), desc1, dialogMode);
    }

    function step630(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Temp");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(340);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step631(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Default shape color");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step632(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlA"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step633(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 5);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(97);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step634(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Default shape color");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(359);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step635(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 8);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(359);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step636(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID("Nm  "), "Shape tone");
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step637(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Default shape");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(349);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step638(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putBoolean(sTID("protectNone"), true);
        desc1.putObject(sTID("layerLocking"), sTID("layerLocking"), desc2);
        executeAction(sTID("applyLocking"), desc1, dialogMode);
    }

    function step639(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putIndex(cTID("Lyr "), 4);
        desc1.putReference(cTID("T   "), ref2);
        desc1.putBoolean(cTID("Adjs"), false);
        desc1.putInteger(cTID("Vrsn"), 5);
        var list1 = new ActionList();
        list1.putInteger(349);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("move"), desc1, dialogMode);
    }

    function step640(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Trsp"));
        desc1.putReference(cTID("T   "), ref2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step641(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("null"), ref1);
        executeAction(cTID("Dlt "), desc1, dialogMode);
    }

    function step642(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putClass(cTID("Nw  "), cTID("Chnl"));
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), cTID("Msk "));
        desc1.putReference(cTID("At  "), ref1);
        desc1.putEnumerated(cTID("Usng"), cTID("UsrM"), cTID("RvlS"));
        executeAction(cTID("Mk  "), desc1, dialogMode);
    }

    function step643(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Chnl"), cTID("Chnl"), sTID("RGB"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step644(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("Al  "));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step645(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        executeAction(cTID("Dlt "), undefined, dialogMode);
    }

    function step646(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Chnl"), sTID("selection"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(cTID("T   "), cTID("Ordn"), cTID("None"));
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step647(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Current shape");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(360);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step648(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Default shape");
        desc1.putReference(cTID("null"), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(349);
        list1.putInteger(360);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step649(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("Orng"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step650(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID("Lyr "), "Background color");
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(277);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step651(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Trgt"));
        desc1.putReference(cTID("null"), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putEnumerated(cTID("Clr "), cTID("Clr "), cTID("None"));
        desc1.putObject(cTID("T   "), cTID("Lyr "), desc2);
        executeAction(cTID("setd"), desc1, dialogMode);
    }

    function step652(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID("Lyr "), cTID("Ordn"), cTID("Back"));
        desc1.putReference(cTID("null"), ref1);
        desc1.putBoolean(cTID("MkVs"), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID("LyrI"), list1);
        executeAction(cTID("slct"), desc1, dialogMode);
    }

    function step653(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putProperty(cTID("Clr "), cTID("Clrs"));
        desc1.putReference(cTID("null"), ref1);
        executeAction(cTID("Rset"), desc1, dialogMode);
    }

    function step654(enabled, withDialog) {
        if (enabled != undefined && !enabled) {
            return;
        }
        var dialogMode = withDialog ? DialogModes.ALL : DialogModes.NO;
        var desc1 = new ActionDescriptor();
        desc1.putEnumerated(cTID("null"), cTID("PrgI"), cTID("Al  "));
        executeAction(cTID("Prge"), desc1, dialogMode);
    }








    // Select
    function step655(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "White details");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1082);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step656(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('Aply'), true);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Move
    function step657(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Frnt'));
        desc1.putReference(cTID('T   '), ref2);
        executeAction(cTID('move'), desc1, dialogMode);
    };

    // Move
    function step658(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Frnt'));
        desc1.putReference(cTID('T   '), ref2);
        executeAction(cTID('move'), desc1, dialogMode);
    };

    // Select
    function step659(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Blask details");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1080);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step660(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('Aply'), true);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Move
    function step661(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Frnt'));
        desc1.putReference(cTID('T   '), ref2);
        executeAction(cTID('move'), desc1, dialogMode);
    };

    // Move
    function step662(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Frnt'));
        desc1.putReference(cTID('T   '), ref2);
        executeAction(cTID('move'), desc1, dialogMode);
    };

    // Select
    function step663(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Thick outline");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1148);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step664(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('Aply'), true);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Delete
    function step665(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(1148);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step666(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Thin outline");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1150);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step667(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('Aply'), true);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Delete
    function step668(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(1150);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step669(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "SHAPE");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1152);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step670(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(1153);
        list1.putInteger(1151);
        list1.putInteger(1143);
        list1.putInteger(1144);
        list1.putInteger(1145);
        list1.putInteger(1161);
        list1.putInteger(1146);
        list1.putInteger(1152);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step671(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Big drops color");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1099);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step672(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(1099);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step673(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Small drops color");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1101);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step674(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(1101);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step675(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Big drops");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1100);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step676(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(1100);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step677(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Small drops");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1083);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step678(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(1083);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step679(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "OBJECT");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(169);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Merge Layers
    function step680(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        executeAction(sTID('mergeLayersNew'), undefined, dialogMode);
    };

    // Select
    function step681(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Background color");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(94);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step682(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(94);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step683(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "brush");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(3);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step684(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(3);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step685(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Background");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step686(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(1);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step687(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "OBJECT");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(169);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Delete
    function step688(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Chnl'), cTID('Chnl'), cTID('Msk '));
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('Aply'), true);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step689(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Blask details");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(98);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Duplicate
    function step690(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        desc1.putInteger(cTID('Vrsn'), 5);
        var list1 = new ActionList();
        list1.putInteger(180);
        desc1.putList(cTID('Idnt'), list1);
        executeAction(cTID('Dplc'), desc1, dialogMode);
    };

    // Set
    function step691(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID('Nm  '), "vector");
        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Select
    function step692(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Blask details");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(98);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Select
    function step693(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "vector");
        desc1.putReference(cTID('null'), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(98);
        list1.putInteger(180);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Select
    function step694(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "Blask details");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(98);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Select
    function step696(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "vector");
        desc1.putReference(cTID('null'), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(98);
        list1.putInteger(180);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Make
    function step697(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(sTID("layerSection"));
        desc1.putReference(cTID('null'), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('From'), ref2);
        desc1.putInteger(sTID("layerSectionStart"), 183);
        desc1.putInteger(sTID("layerSectionEnd"), 184);
        desc1.putString(cTID('Nm  '), "Group 1");
        executeAction(cTID('Mk  '), desc1, dialogMode);
    };

    // Set
    function step698(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID('Nm  '), "sketch");
        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Select
    function step699(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "White details");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(100);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Set
    function step700(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID('Nm  '), "White details"); //desc2.putString(cTID('Nm  '), "2");
        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Select
    function step701(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "OBJECT");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(172);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Set
    function step702(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID('Nm  '), "OBJECT"); //desc2.putString(cTID('Nm  '), "1");
        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Select
    function step703(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "White details"); //ref1.putName(cTID('Lyr '), "2");
        desc1.putReference(cTID('null'), ref1);
        desc1.putEnumerated(sTID("selectionModifier"), sTID("selectionModifierType"), sTID("addToSelectionContinuous"));
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(172);
        list1.putInteger(100);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Make
    function step704(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putClass(sTID("layerSection"));
        desc1.putReference(cTID('null'), ref1);
        var ref2 = new ActionReference();
        ref2.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('From'), ref2);
        desc1.putInteger(sTID("layerSectionStart"), 185);
        desc1.putInteger(sTID("layerSectionEnd"), 186);
        desc1.putString(cTID('Nm  '), "Group 1");
        executeAction(cTID('Mk  '), desc1, dialogMode);
    };

    // Set
    function step705(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var desc2 = new ActionDescriptor();
        desc2.putString(cTID('Nm  '), "image");
        desc1.putObject(cTID('T   '), cTID('Lyr '), desc2);
        executeAction(cTID('setd'), desc1, dialogMode);
    };

    // Delete
    function step706(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        var list1 = new ActionList();
        list1.putInteger(214);
        list1.putInteger(130);
        list1.putInteger(212);
        list1.putInteger(213);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('Dlt '), desc1, dialogMode);
    };

    // Select
    function step707(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putName(cTID('Lyr '), "sketch");
        desc1.putReference(cTID('null'), ref1);
        desc1.putBoolean(cTID('MkVs'), false);
        var list1 = new ActionList();
        list1.putInteger(213);
        desc1.putList(cTID('LyrI'), list1);
        executeAction(cTID('slct'), desc1, dialogMode);
    };

    // Merge Layers
    function step708(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        executeAction(sTID('mergeLayersNew'), undefined, dialogMode);
    };

    // Deselect Layers
    function step709(enabled, withDialog) {
        if (enabled != undefined && !enabled)
            return;
        var dialogMode = (withDialog ? DialogModes.ALL : DialogModes.NO);
        var desc1 = new ActionDescriptor();
        var ref1 = new ActionReference();
        ref1.putEnumerated(cTID('Lyr '), cTID('Ordn'), cTID('Trgt'));
        desc1.putReference(cTID('null'), ref1);
        executeAction(sTID('selectNoLayers'), desc1, dialogMode);
    };

    step1();
    step2();
    step3();
    step4();
    step5();
    step6();
    step7();
    step8();
    step9();
    step10();
    step11();
    step12();
    step13();
    step14();
    step15();
    step16();
    step17();
    step18();
    step19();
    step20();
    step21();
    step22();
    step23();
    step24();
    step25();
    step26();
    step27();
    step28();
    step29();
    step30();
    step31();
    step32();
    step33();
    step34();
    step35();
    step36();
    step37();
    step38();
    step39();
    step40();
    step41();
    step42();
    step43();
    step44();
    step45();
    step46();
    step47();
    step48();
    step49();
    step50();
    step51();
    step52();
    step53();
    step54();
    step55();
    step56();
    step57();
    step58();
    step59();
    step60();
    step61();
    step62();
    step63();
    step64();
    step65();
    step66();
    step67();
    step68();
    step69();
    step70();
    step71();
    step72();
    step73();
    step74();
    step75();
    step76();
    step77();
    step78();
    step79();
    step80();
    step81();
    step82();
    step83();
    step84();
    step85();
    step86();
    step87();
    step88();
    step89();
    step90();
    step91();
    step92();
    step93();
    step94();
    step95();
    step96();
    step97();
    step98();
    step99();
    step100();
    step101();
    step102();
    step103();
    step104();
    step105();
    step106();
    step107();
    step108();
    step109();
    step110();
    step111();
    step112();
    step113();
    step114();
    step115();
    step116();
    step117();
    step118();
    step119();
    step120();
    step121();
    step122();
    step123();
    step124();
    step125();
    step126();
    step127();
    step128();
    step129();
    step130();
    step131();
    step132();
    step133();
    step134();
    step135();
    step136();
    step137();
    step138();
    step139();
    step140();
    step141();
    step142();
    step143();
    step144();
    step145();
    step146();
    step147();
    step148();
    step149();
    step150();
    step151();
    step152();
    step153();
    step154();
    step155();
    step156();
    step157();
    step158();
    step159();
    step160();
    step161();
    step162();
    step163();
    step164();
    step165();
    step166();
    step167();
    step168();
    step169();
    step170();
    step171();
    step172();
    step173();
    step174();
    step175();
    step176();
    step177();
    step178();
    step179();
    step180();
    step181();
    step182();
    step183();
    step184();
    step185();
    step186();
    step187();
    step188();
    step189();
    step190();
    step191();
    step192();
    step193();
    step194();
    step195();
    step196();
    step197();
    step198();
    step199();
    step200();
    step201();
    step202();
    step203();
    step204();
    step205();
    step206();
    step207();
    step208();
    step209();
    step210();
    step211();
    step212();
    step213();
    step214();
    step215();
    step216();
    step217();
    step218();
    step219();
    step220();
    step221();
    step222();
    step223();
    step224();
    step225();
    step226();
    step227();
    step228();
    step229();
    step230();
    step231();
    step232();
    step233();
    step234();
    step235();
    step236();
    step237();
    step238();
    step239();
    step240();
    step241();
    step242();
    step243();
    step244();
    step245();
    step246();
    step247();
    step248();
    step249();
    step250();
    step251();
    step252();
    step253();
    step254();
    step255();
    step256();
    step257();
    step258();
    step259();
    step260();
    step261();
    step262();
    step263();
    step264();
    step265();
    step266();
    step267();
    step268();
    step269();
    step270();
    step271();
    step272();
    step273();
    step274();
    step275();
    step276();
    step277();
    step278();
    step279();
    step280();
    step281();
    step282();
    step283();
    step284();
    step285();
    step286();
    step287();
    step288();
    step289();
    step290();
    step291();
    step292();
    step293();
    step294();
    step295();
    step296();
    step297();
    step298();
    step299();
    step300();
    step301();
    step302();
    step303();
    step304();
    step305();
    step306();
    step307();
    step308();
    step309();
    step310();
    step311();
    step312();
    step313();
    step314();
    step315();
    step316();
    step317();
    step318();
    step319();
    step320();
    step321();
    step322();
    step323();
    step324();
    step325();
    step326();
    step327();
    step328();
    step329();
    step330();
    step331();
    step332();
    step333();
    step334();
    step335();
    step336();
    step337();
    step338();
    step339();
    step340();
    step341();
    step342();
    step343();
    step344();
    step345();
    step346();
    step347();
    step348();
    step349();
    step350();
    step351();
    step352();
    step353();
    step354();
    step355();
    step356();
    step357();
    step358();
    step359();
    step360();
    step361();
    step362();
    step363();
    step364();
    step365();
    step366();
    step367();
    step368();
    step369();
    step370();
    step371();
    step372();
    step373();
    step374();
    step375();
    step376();
    step377();
    step378();
    step379();
    step380();
    step381();
    step382();
    step383();
    step384();
    step385();
    step386();
    step387();
    step388();
    step389();
    step390();
    step391();
    step392();
    step393();
    step394();
    step395();
    step396();
    step397();
    step398();
    step399();
    step400();
    step401();
    step402();
    step403();
    step404();
    step405();
    step406();
    step407();
    step408();
    step409();
    step410();
    step411();
    step412();
    step413();
    step414();
    step415();
    step416();
    step417();
    step418();
    step419();
    step420();
    step421();
    step422();
    step423();
    step424();
    step425();
    step426();
    step427();
    step428();
    step429();
    step430();
    step431();
    step432();
    step433();
    step434();
    step435();
    step436();
    step437();
    step438();
    step439();
    step440();
    step441();
    step442();
    step443();
    step444();
    step445();
    step446();
    step447();
    step448();
    step449();
    step450();
    step451();
    step452();
    step453();
    step454();
    step455();
    step456();
    step457();
    step458();
    step459();
    step460();
    step461();
    step462();
    step463();
    step464();
    step465();
    step466();
    step467();
    step468();
    step469();
    step470();
    step471();
    step472();
    step473();
    step474();
    step475();
    step476();
    step477();
    step478();
    step479();
    step480();
    step481();
    step482();
    step483();
    step484();
    step485();
    step486();
    step487();
    step488();
    step489();
    step490();
    step491();
    step492();
    step493();
    step494();
    step495();
    step496();
    step497();
    step498();
    step499();
    step500();
    step501();
    step502();
    step503();
    step504();
    step505();
    step506();
    step507();
    step508();
    step509();
    step510();
    step511();
    step512();
    step513();
    step514();
    step515();
    step516();
    step517();
    step518();
    step519();
    step520();
    step521();
    step522();
    step523();
    step524();
    step525();
    step526();
    step527();
    step528();
    step529();
    step530();
    step531();
    step532();
    step533();
    step534();
    step535();
    step536();
    step537();
    step538();
    step539();
    step540();
    step541();
    step542();
    step543();
    step544();
    step545();
    step546();
    step547();
    step548();
    step549();

    step550();
    step551();
    step552();
    step553();
    step554();
    step555();
    step556();
    step557();
    step558();
    step559();
    step560();
    step561();
    step562();
    step563();
    step564();
    step565();
    step566();
    step567();
    step568();
    step569();
    step570();
    step571();
    step572();
    step573();
    step574();
    step575();
    step576();
    step577();
    step578();
    step579();
    step580();
    step581();
    step582();
    step583();
    step584();
    step585();
    step586();
    step587();
    step588();
    step589();
    step590();
    step591();
    step592();
    step593();
    step594();
    step595();
    step596();
    step597();
    step598();
    step599();
    step600();
    step601();
    step602();
    step603();
    step604();
    step605();
    step606();
    step607();
    step608();
    step609();
    step610();
    step611();
    step612();
    step613();
    step614();
    step615();
    step616();
    step617();
    step618();
    step619();
    step620();
    step621();
    step622();
    step623();
    step624();

    step625();
    step626();
    step627();
    step628();
    step629();
    step630();
    step631();
    step632();
    step633();
    step634();
    step635();
    step636();
    step637();
    step638();
    step639();
    step640();
    step641();
    step642();
    step643();
    step644();
    step645();
    step646();
    step647();
    step648();
    step649();
    step650();
    step651();
    step652();
    step653();
    step654();


    step655();
    step656();
    step657();
    step658();
    step659();
    step660();
    step661();
    step662();
    step663();
    step664();
    step665();
    step666();
    step667();
    step668();
    step669();
    step670();
    step671();
    step672();
    step673();
    step674();
    step675();
    step676();
    step677();
    step678();
    step679();
    step680();
    step681();
    step682();
    step683();
    step684();
    step685();
    step686();
    step687();
    step688();
    step689();
    step690();
    step691();
    step692();
    step693();
    step694();
    step696();
    step697();
    step698();
    step699();
    step700();
    step701();
    step702();
    step703();
    step704();
    step705();
    step706();
    step707();
    step708();
    step709();
}
