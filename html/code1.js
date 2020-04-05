gdjs.GameCode = {};
gdjs.GameCode.forEachCount0_2 = 0;

gdjs.GameCode.forEachCount1_2 = 0;

gdjs.GameCode.forEachCount2_2 = 0;

gdjs.GameCode.forEachCount3_2 = 0;

gdjs.GameCode.forEachIndex2 = 0;

gdjs.GameCode.forEachObjects2 = [];

gdjs.GameCode.forEachTotalCount2 = 0;

gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDBirdObjects1= [];
gdjs.GameCode.GDBirdObjects2= [];
gdjs.GameCode.GDBirdObjects3= [];
gdjs.GameCode.GDBirdObjects4= [];
gdjs.GameCode.GDPoopObjects1= [];
gdjs.GameCode.GDPoopObjects2= [];
gdjs.GameCode.GDPoopObjects3= [];
gdjs.GameCode.GDPoopObjects4= [];
gdjs.GameCode.GDPerson3Objects1= [];
gdjs.GameCode.GDPerson3Objects2= [];
gdjs.GameCode.GDPerson3Objects3= [];
gdjs.GameCode.GDPerson3Objects4= [];
gdjs.GameCode.GDPerson1Objects1= [];
gdjs.GameCode.GDPerson1Objects2= [];
gdjs.GameCode.GDPerson1Objects3= [];
gdjs.GameCode.GDPerson1Objects4= [];
gdjs.GameCode.GDScoreValueObjects1= [];
gdjs.GameCode.GDScoreValueObjects2= [];
gdjs.GameCode.GDScoreValueObjects3= [];
gdjs.GameCode.GDScoreValueObjects4= [];
gdjs.GameCode.GDScoreLabelObjects1= [];
gdjs.GameCode.GDScoreLabelObjects2= [];
gdjs.GameCode.GDScoreLabelObjects3= [];
gdjs.GameCode.GDScoreLabelObjects4= [];
gdjs.GameCode.GDPerson4Objects1= [];
gdjs.GameCode.GDPerson4Objects2= [];
gdjs.GameCode.GDPerson4Objects3= [];
gdjs.GameCode.GDPerson4Objects4= [];
gdjs.GameCode.GDPerson2Objects1= [];
gdjs.GameCode.GDPerson2Objects2= [];
gdjs.GameCode.GDPerson2Objects3= [];
gdjs.GameCode.GDPerson2Objects4= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPoopObjects1Objects = Hashtable.newFrom({"Poop": gdjs.GameCode.GDPoopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPerson1Objects1ObjectsGDgdjs_46GameCode_46GDPerson2Objects1ObjectsGDgdjs_46GameCode_46GDPerson3Objects1ObjectsGDgdjs_46GameCode_46GDPerson4Objects1Objects = Hashtable.newFrom({"Person1": gdjs.GameCode.GDPerson1Objects1, "Person2": gdjs.GameCode.GDPerson2Objects1, "Person3": gdjs.GameCode.GDPerson3Objects1, "Person4": gdjs.GameCode.GDPerson4Objects1});gdjs.GameCode.eventsList0x716134 = function(runtimeScene) {

{


{
gdjs.GameCode.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));
gdjs.GameCode.GDPerson1Objects1.length = 0;

gdjs.GameCode.GDPerson2Objects1.length = 0;

gdjs.GameCode.GDPerson3Objects1.length = 0;

gdjs.GameCode.GDPerson4Objects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer_spawn");
}{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPerson1Objects1ObjectsGDgdjs_46GameCode_46GDPerson2Objects1ObjectsGDgdjs_46GameCode_46GDPerson3Objects1ObjectsGDgdjs_46GameCode_46GDPerson4Objects1Objects, "Person" + gdjs.evtTools.common.toString(gdjs.randomWithStep(1, 4, 1)), -(64), (( gdjs.GameCode.GDGroundObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDGroundObjects1[0].getY()), "");
}{for(var i = 0, len = gdjs.GameCode.GDPerson1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson1Objects1[i].returnVariable(gdjs.GameCode.GDPerson1Objects1[i].getVariables().get("direction")).setNumber(gdjs.randomWithStep(-(1), 1, 2));
}
for(var i = 0, len = gdjs.GameCode.GDPerson2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson2Objects1[i].returnVariable(gdjs.GameCode.GDPerson2Objects1[i].getVariables().get("direction")).setNumber(gdjs.randomWithStep(-(1), 1, 2));
}
for(var i = 0, len = gdjs.GameCode.GDPerson3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson3Objects1[i].returnVariable(gdjs.GameCode.GDPerson3Objects1[i].getVariables().get("direction")).setNumber(gdjs.randomWithStep(-(1), 1, 2));
}
for(var i = 0, len = gdjs.GameCode.GDPerson4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson4Objects1[i].returnVariable(gdjs.GameCode.GDPerson4Objects1[i].getVariables().get("direction")).setNumber(gdjs.randomWithStep(-(1), 1, 2));
}
}{for(var i = 0, len = gdjs.GameCode.GDPerson1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson1Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson1Objects1[i].getVariables().get("direction"))) * (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 32 - 50));
}
for(var i = 0, len = gdjs.GameCode.GDPerson2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson2Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson2Objects1[i].getVariables().get("direction"))) * (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 32 - 50));
}
for(var i = 0, len = gdjs.GameCode.GDPerson3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson3Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson3Objects1[i].getVariables().get("direction"))) * (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 32 - 50));
}
for(var i = 0, len = gdjs.GameCode.GDPerson4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson4Objects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson4Objects1[i].getVariables().get("direction"))) * (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 + 32 - 50));
}
}{for(var i = 0, len = gdjs.GameCode.GDPerson1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson1Objects1[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson1Objects1[i].getVariables().get("direction"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson1Objects1[i].getVariables().get("speed"))) * -(1), 1);
}
for(var i = 0, len = gdjs.GameCode.GDPerson2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson2Objects1[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson2Objects1[i].getVariables().get("direction"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson2Objects1[i].getVariables().get("speed"))) * -(1), 1);
}
for(var i = 0, len = gdjs.GameCode.GDPerson3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson3Objects1[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson3Objects1[i].getVariables().get("direction"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson3Objects1[i].getVariables().get("speed"))) * -(1), 1);
}
for(var i = 0, len = gdjs.GameCode.GDPerson4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson4Objects1[i].addPolarForce(0, (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson4Objects1[i].getVariables().get("direction"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPerson4Objects1[i].getVariables().get("speed"))) * -(1), 1);
}
}}

}


}; //End of gdjs.GameCode.eventsList0x716134
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPoopObjects3Objects = Hashtable.newFrom({"Poop": gdjs.GameCode.GDPoopObjects3});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPerson1Objects3ObjectsGDgdjs_46GameCode_46GDPerson2Objects3ObjectsGDgdjs_46GameCode_46GDPerson3Objects3ObjectsGDgdjs_46GameCode_46GDPerson4Objects3Objects = Hashtable.newFrom({"Person1": gdjs.GameCode.GDPerson1Objects3, "Person2": gdjs.GameCode.GDPerson2Objects3, "Person3": gdjs.GameCode.GDPerson3Objects3, "Person4": gdjs.GameCode.GDPerson4Objects3});gdjs.GameCode.eventsList0x71677c = function(runtimeScene) {

{

gdjs.GameCode.GDPerson1Objects3.createFrom(gdjs.GameCode.GDPerson1Objects2);

gdjs.GameCode.GDPerson2Objects3.createFrom(gdjs.GameCode.GDPerson2Objects2);

gdjs.GameCode.GDPerson3Objects3.createFrom(gdjs.GameCode.GDPerson3Objects2);

gdjs.GameCode.GDPerson4Objects3.createFrom(gdjs.GameCode.GDPerson4Objects2);

gdjs.GameCode.GDPoopObjects3.createFrom(runtimeScene.getObjects("Poop"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPoopObjects3Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPerson1Objects3ObjectsGDgdjs_46GameCode_46GDPerson2Objects3ObjectsGDgdjs_46GameCode_46GDPerson3Objects3ObjectsGDgdjs_46GameCode_46GDPerson4Objects3Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7432492);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPerson1Objects3 */
/* Reuse gdjs.GameCode.GDPerson2Objects3 */
/* Reuse gdjs.GameCode.GDPerson3Objects3 */
/* Reuse gdjs.GameCode.GDPerson4Objects3 */
/* Reuse gdjs.GameCode.GDPoopObjects3 */
{gdjs.evtTools.sound.playSound(runtimeScene, "61046__timtube__fart-2.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDPoopObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDPoopObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPerson1Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPerson1Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDPerson2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPerson2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDPerson3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPerson3Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.GameCode.GDPerson4Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDPerson4Objects3[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(1).add((gdjs.RuntimeObject.getVariableNumber(((gdjs.GameCode.GDPerson4Objects3.length === 0 ) ? ((gdjs.GameCode.GDPerson3Objects3.length === 0 ) ? ((gdjs.GameCode.GDPerson2Objects3.length === 0 ) ? ((gdjs.GameCode.GDPerson1Objects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.GameCode.GDPerson1Objects3[0].getVariables()) : gdjs.GameCode.GDPerson2Objects3[0].getVariables()) : gdjs.GameCode.GDPerson3Objects3[0].getVariables()) : gdjs.GameCode.GDPerson4Objects3[0].getVariables()).get("score"))));
}}

}


}; //End of gdjs.GameCode.eventsList0x71677c
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPoopObjects1Objects = Hashtable.newFrom({"Poop": gdjs.GameCode.GDPoopObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects1});gdjs.GameCode.eventsList0x5b6e18 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer_poop");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer_poop_done");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Happy walk.mp3", true, 100, 1);
}}

}


{

gdjs.GameCode.GDBirdObjects1.createFrom(runtimeScene.getObjects("Bird"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBirdObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBirdObjects1[i].getX() > (gdjs.GameCode.GDBirdObjects1[i].getWidth()) / 2 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBirdObjects1[k] = gdjs.GameCode.GDBirdObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBirdObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "timer_poop_done");
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBirdObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBirdObjects1[i].flipX(true);
}
}{for(var i = 0, len = gdjs.GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBirdObjects1[i].addPolarForce(180, 500, 0);
}
}}

}


{

gdjs.GameCode.GDBirdObjects1.createFrom(runtimeScene.getObjects("Bird"));

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBirdObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBirdObjects1[i].getX() < gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) - (gdjs.GameCode.GDBirdObjects1[i].getWidth()) / 2 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDBirdObjects1[k] = gdjs.GameCode.GDBirdObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBirdObjects1.length = k;}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "timer_poop_done");
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBirdObjects1 */
gdjs.GameCode.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));
{for(var i = 0, len = gdjs.GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBirdObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBirdObjects1[i].addPolarForce(0, 500, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].hide();
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timer_poop");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.GameCode.condition0IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
gdjs.GameCode.condition1IsTrue_1.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition2IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7428556);
}
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
gdjs.GameCode.GDBirdObjects1.createFrom(runtimeScene.getObjects("Bird"));
gdjs.GameCode.GDPoopObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPoopObjects1Objects, (( gdjs.GameCode.GDBirdObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBirdObjects1[0].getPointX("")), (( gdjs.GameCode.GDBirdObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDBirdObjects1[0].getPointY("")), "");
}{for(var i = 0, len = gdjs.GameCode.GDPoopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPoopObjects1[i].addPolarForce(270, -(500), 1);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer_poop");
}{for(var i = 0, len = gdjs.GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBirdObjects1[i].setAnimationName("poop");
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer_poop_done");
}{gdjs.evtTools.sound.playSound(runtimeScene, "241000__dsisstudios__short-fart-01.wav", false, 100, 1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.4, "timer_poop_done");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDBirdObjects1.createFrom(runtimeScene.getObjects("Bird"));
{for(var i = 0, len = gdjs.GameCode.GDBirdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBirdObjects1[i].setAnimationName("fly");
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer_spawn");
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList0x716134(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDPerson1Objects1.createFrom(runtimeScene.getObjects("Person1"));
gdjs.GameCode.GDPerson2Objects1.createFrom(runtimeScene.getObjects("Person2"));
gdjs.GameCode.GDPerson3Objects1.createFrom(runtimeScene.getObjects("Person3"));
gdjs.GameCode.GDPerson4Objects1.createFrom(runtimeScene.getObjects("Person4"));

gdjs.GameCode.forEachTotalCount2 = 0;
gdjs.GameCode.forEachObjects2.length = 0;
gdjs.GameCode.forEachCount0_2 = gdjs.GameCode.GDPerson1Objects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount0_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDPerson1Objects1);
gdjs.GameCode.forEachCount1_2 = gdjs.GameCode.GDPerson2Objects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount1_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDPerson2Objects1);
gdjs.GameCode.forEachCount2_2 = gdjs.GameCode.GDPerson3Objects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount2_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDPerson3Objects1);
gdjs.GameCode.forEachCount3_2 = gdjs.GameCode.GDPerson4Objects1.length;
gdjs.GameCode.forEachTotalCount2 += gdjs.GameCode.forEachCount3_2;
gdjs.GameCode.forEachObjects2.push.apply(gdjs.GameCode.forEachObjects2,gdjs.GameCode.GDPerson4Objects1);
for(gdjs.GameCode.forEachIndex2 = 0;gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachTotalCount2;++gdjs.GameCode.forEachIndex2) {
gdjs.GameCode.GDPerson1Objects2.length = 0;

gdjs.GameCode.GDPerson2Objects2.length = 0;

gdjs.GameCode.GDPerson3Objects2.length = 0;

gdjs.GameCode.GDPerson4Objects2.length = 0;


if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2) {
    gdjs.GameCode.GDPerson1Objects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2) {
    gdjs.GameCode.GDPerson2Objects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2+gdjs.GameCode.forEachCount2_2) {
    gdjs.GameCode.GDPerson3Objects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
else if (gdjs.GameCode.forEachIndex2 < gdjs.GameCode.forEachCount0_2+gdjs.GameCode.forEachCount1_2+gdjs.GameCode.forEachCount2_2+gdjs.GameCode.forEachCount3_2) {
    gdjs.GameCode.GDPerson4Objects2.push(gdjs.GameCode.forEachObjects2[gdjs.GameCode.forEachIndex2]);
}
if (true) {

{ //Subevents: 
gdjs.GameCode.eventsList0x71677c(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.GameCode.GDGroundObjects1.createFrom(runtimeScene.getObjects("Ground"));
gdjs.GameCode.GDPoopObjects1.createFrom(runtimeScene.getObjects("Poop"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPoopObjects1Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDGroundObjects1Objects, false, runtimeScene, false);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPoopObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPoopObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPoopObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.GameCode.GDPerson1Objects1.createFrom(runtimeScene.getObjects("Person1"));
gdjs.GameCode.GDPerson2Objects1.createFrom(runtimeScene.getObjects("Person2"));
gdjs.GameCode.GDPerson3Objects1.createFrom(runtimeScene.getObjects("Person3"));
gdjs.GameCode.GDPerson4Objects1.createFrom(runtimeScene.getObjects("Person4"));

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPerson1Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPerson1Objects1[i].getVariableNumber(gdjs.GameCode.GDPerson1Objects1[i].getVariables().get("direction")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPerson1Objects1[k] = gdjs.GameCode.GDPerson1Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPerson1Objects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDPerson2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPerson2Objects1[i].getVariableNumber(gdjs.GameCode.GDPerson2Objects1[i].getVariables().get("direction")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPerson2Objects1[k] = gdjs.GameCode.GDPerson2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPerson2Objects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDPerson3Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPerson3Objects1[i].getVariableNumber(gdjs.GameCode.GDPerson3Objects1[i].getVariables().get("direction")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPerson3Objects1[k] = gdjs.GameCode.GDPerson3Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPerson3Objects1.length = k;for(var i = 0, k = 0, l = gdjs.GameCode.GDPerson4Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPerson4Objects1[i].getVariableNumber(gdjs.GameCode.GDPerson4Objects1[i].getVariables().get("direction")) == 1 ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPerson4Objects1[k] = gdjs.GameCode.GDPerson4Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPerson4Objects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPerson1Objects1 */
/* Reuse gdjs.GameCode.GDPerson2Objects1 */
/* Reuse gdjs.GameCode.GDPerson3Objects1 */
/* Reuse gdjs.GameCode.GDPerson4Objects1 */
{for(var i = 0, len = gdjs.GameCode.GDPerson1Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson1Objects1[i].flipX(true);
}
for(var i = 0, len = gdjs.GameCode.GDPerson2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson2Objects1[i].flipX(true);
}
for(var i = 0, len = gdjs.GameCode.GDPerson3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson3Objects1[i].flipX(true);
}
for(var i = 0, len = gdjs.GameCode.GDPerson4Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDPerson4Objects1[i].flipX(true);
}
}}

}


{


{
gdjs.GameCode.GDScoreValueObjects1.createFrom(runtimeScene.getObjects("ScoreValue"));
{for(var i = 0, len = gdjs.GameCode.GDScoreValueObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDScoreValueObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(1)));
}
}}

}


{


{
}

}


}; //End of gdjs.GameCode.eventsList0x5b6e18


gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDBirdObjects1.length = 0;
gdjs.GameCode.GDBirdObjects2.length = 0;
gdjs.GameCode.GDBirdObjects3.length = 0;
gdjs.GameCode.GDBirdObjects4.length = 0;
gdjs.GameCode.GDPoopObjects1.length = 0;
gdjs.GameCode.GDPoopObjects2.length = 0;
gdjs.GameCode.GDPoopObjects3.length = 0;
gdjs.GameCode.GDPoopObjects4.length = 0;
gdjs.GameCode.GDPerson3Objects1.length = 0;
gdjs.GameCode.GDPerson3Objects2.length = 0;
gdjs.GameCode.GDPerson3Objects3.length = 0;
gdjs.GameCode.GDPerson3Objects4.length = 0;
gdjs.GameCode.GDPerson1Objects1.length = 0;
gdjs.GameCode.GDPerson1Objects2.length = 0;
gdjs.GameCode.GDPerson1Objects3.length = 0;
gdjs.GameCode.GDPerson1Objects4.length = 0;
gdjs.GameCode.GDScoreValueObjects1.length = 0;
gdjs.GameCode.GDScoreValueObjects2.length = 0;
gdjs.GameCode.GDScoreValueObjects3.length = 0;
gdjs.GameCode.GDScoreValueObjects4.length = 0;
gdjs.GameCode.GDScoreLabelObjects1.length = 0;
gdjs.GameCode.GDScoreLabelObjects2.length = 0;
gdjs.GameCode.GDScoreLabelObjects3.length = 0;
gdjs.GameCode.GDScoreLabelObjects4.length = 0;
gdjs.GameCode.GDPerson4Objects1.length = 0;
gdjs.GameCode.GDPerson4Objects2.length = 0;
gdjs.GameCode.GDPerson4Objects3.length = 0;
gdjs.GameCode.GDPerson4Objects4.length = 0;
gdjs.GameCode.GDPerson2Objects1.length = 0;
gdjs.GameCode.GDPerson2Objects2.length = 0;
gdjs.GameCode.GDPerson2Objects3.length = 0;
gdjs.GameCode.GDPerson2Objects4.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;

gdjs.GameCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
