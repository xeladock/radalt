window.globalProvideData('slide', '{"title":"Radware’s Alteon Virtual Appliance (VA) is a fully-featured Alteon device providing identical functionality to Alteon physical devices.","trackViews":true,"showMenuResultIcon":true,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide3","width":720,"height":405,"resume":true,"background":{"type":"swf","imagedata":{"assetId":7,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"6E4CM3LZHK4","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_this.5XAITVIsdBO.$Viewed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5XAITVIsdBO.6gtRrzbvQeZ.#_checked","typea":"var","valueb":true,"typeb":"boolean"},{"kind":"compare","operator":"eq","valuea":"5XAITVIsdBO.6K3ZXLt7i5L.#_checked","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"eval_interaction","id":"_this.6GHDymqFVC9"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5sC74zfudVW.InvalidPromptSlide"}}]}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5sC74zfudVW.ScrollPromptSlide"}}]}]},"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]},"ReviewInt_5XAITVIsdBO":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5XAITVIsdBO.6gtRrzbvQeZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5XAITVIsdBO.6K3ZXLt7i5L"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6GHDymqFVC9.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XAITVIsdBO_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XAITVIsdBO_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_5XAITVIsdBO":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5XAITVIsdBO.6gtRrzbvQeZ.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XAITVIsdBO.6gtRrzbvQeZ"}}]},{"kind":"adjustvar","variable":"5XAITVIsdBO.6gtRrzbvQeZ._hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5XAITVIsdBO.6gtRrzbvQeZ._down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"5XAITVIsdBO.6gtRrzbvQeZ._disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"5XAITVIsdBO.6gtRrzbvQeZ.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5XAITVIsdBO.6gtRrzbvQeZ"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5XAITVIsdBO.6K3ZXLt7i5L"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5XAITVIsdBO":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5XAITVIsdBO"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5XAITVIsdBO":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"5XAITVIsdBO.6gtRrzbvQeZ.ActGrpSetDisabledState"},{"kind":"exe_actiongroup","id":"5XAITVIsdBO.6K3ZXLt7i5L.ActGrpSetDisabledState"}]},"5XAITVIsdBO_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6qhYwUrA4Os","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6GHDymqFVC9.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6PJ3j5KYfDq.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5XAITVIsdBO"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6GHDymqFVC9.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6GHDymqFVC9.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5XAITVIsdBO"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6E4CM3LZHK4":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_6E4CM3LZHK4":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"},{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5sC74zfudVW","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5sC74zfudVW","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"6qhYwUrA4Os","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6qhYwUrA4Os","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5XAITVIsdBO"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6qhYwUrA4Os","typea":"var","valueb":"6PJ3j5KYfDq","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6PJ3j5KYfDq.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5XAITVIsdBO"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6PJ3j5KYfDq.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5XAITVIsdBO"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"5XAITVIsdBO_CheckAnswered"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6E4CM3LZHK4"}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6qhYwUrA4Os","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"playnextdrawslide"}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6E4CM3LZHK4"}]}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XAITVIsdBO"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XAITVIsdBO.6K3ZXLt7i5L"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5XAITVIsdBO.6gtRrzbvQeZ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6N8ixOhN4MY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6TkyFufpk5A"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6RptNBPknqv"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":672,"contentheight":90,"objects":[{"kind":"shufflegroup","objects":[{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5fGPKkEaJjD_209555891","id":"01","linkId":"txt__default_6K3ZXLt7i5L","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":81,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":33}}}],"shapemaskId":"","xPos":24,"yPos":45,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":22.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"False","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}}],"width":648,"height":45,"resume":true,"useHandCursor":true,"id":"6K3ZXLt7i5L","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6gtRrzbvQeZ.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6gtRrzbvQeZ._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6gtRrzbvQeZ"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"radio","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"6nPpiqdRLbZ_-309826026","id":"01","linkId":"txt__default_6gtRrzbvQeZ","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":78,"bottom":34,"pngfb":false,"pr":{"l":"Lib","i":36}}}],"shapemaskId":"","xPos":24,"yPos":0,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":22.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-9,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":34}},"html5data":{"xPos":-9,"yPos":-1,"width":657,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Selected_Review","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-9,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":35}},"html5data":{"xPos":-9,"yPos":-1,"width":657,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected","data":{"hotlinkId":"","accState":16,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Selected_Disabled","data":{"hotlinkId":"","accState":17,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}},{"kind":"state","name":"_default_Hover_Down_Selected","data":{"hotlinkId":"","accState":24,"vectorData":{"left":-1,"top":-1,"right":648,"bottom":45,"altText":"True","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":649,"height":46,"strokewidth":3}}}],"width":648,"height":45,"resume":true,"useHandCursor":true,"id":"6gtRrzbvQeZ","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_checked","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetCheckedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"exe_actiongroup","id":"ActGrpUnchecked"}]},"ActGrpUnchecked":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.6K3ZXLt7i5L.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"adjustvar","variable":"_parent.6K3ZXLt7i5L._checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_parent.6K3ZXLt7i5L"}}]}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpUnchecked"},{"kind":"adjustvar","variable":"_checked","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]}],"shuffle":false,"accType":"none","acclabeltype":"text","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":false,"useHandCursor":true,"id":""}],"shapemaskId":"","xPos":12,"yPos":210,"tabIndex":3,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":83,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":36,"yPos":210,"width":648,"height":166,"strokewidth":0}},"width":672,"height":166,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":672,"bottom":167,"altText":"True/False","pngfb":false,"pr":{"l":"Lib","i":28}}},"id":"5XAITVIsdBO"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6N8ixOhN4MY_1645129832","id":"01","linkId":"txt__default_6N8ixOhN4MY","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":653,"bottom":93,"pngfb":false,"pr":{"l":"Lib","i":38}}}],"shapemaskId":"","xPos":36,"yPos":78,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":330,"rotateYPos":48.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":660,"bottom":97,"altText":"Radware’s Alteon Virtual Appliance (VA) is a fully-featured Alteon device providing identical functionality to Alteon physical devices.","pngfb":false,"pr":{"l":"Lib","i":37}},"html5data":{"xPos":-1,"yPos":-1,"width":661,"height":98,"strokewidth":0}},"width":660,"height":97,"resume":true,"useHandCursor":true,"id":"6N8ixOhN4MY"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6TkyFufpk5A_-394693188","id":"01","linkId":"txt__default_6TkyFufpk5A","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":203,"bottom":28,"pngfb":false,"pr":{"l":"Lib","i":40}}}],"shapemaskId":"","xPos":36,"yPos":170,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":121.5,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":243,"bottom":31,"altText":"Select the correct answer.","pngfb":false,"pr":{"l":"Lib","i":39}},"html5data":{"xPos":-1,"yPos":-1,"width":244,"height":32,"strokewidth":0}},"width":243,"height":31,"resume":true,"useHandCursor":true,"id":"6TkyFufpk5A"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6RptNBPknqv_-2042667634","id":"01","linkId":"txt__default_6RptNBPknqv","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":71,"bottom":27,"pngfb":false,"pr":{"l":"Lib","i":42}}}],"shapemaskId":"","xPos":509,"yPos":4,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":49.5,"rotateYPos":15.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":99,"bottom":31,"altText":"1 / 50","pngfb":false,"pr":{"l":"Lib","i":41}},"html5data":{"xPos":-1,"yPos":-1,"width":100,"height":32,"strokewidth":0}},"width":99,"height":31,"resume":true,"useHandCursor":true,"id":"6RptNBPknqv"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5XAITVIsdBO_CorrectReview","id":"01","linkId":"5XAITVIsdBO_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":44}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":43}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5XAITVIsdBO_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5XAITVIsdBO_IncorrectReview","id":"01","linkId":"5XAITVIsdBO_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":46}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5XAITVIsdBO_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');