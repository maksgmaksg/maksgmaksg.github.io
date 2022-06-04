(this["webpackJsonpmaxwell"] = this["webpackJsonpmaxwell"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\r\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  border: 0;\r\n  overflow: hidden;\r\n  display: block;\r\n}\r\n\r\ncode {\r\n  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _em__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./em */ "./src/em/index.ts");
/* harmony import */ var _em_drawing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./em/drawing */ "./src/em/drawing.ts");
/* harmony import */ var _em_serialization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./em/serialization */ "./src/em/serialization.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/components.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _share__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./share */ "./src/share.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\sim\\maxwell-simulation\\src\\App.tsx";







const defaultPreset = _util__WEBPACK_IMPORTED_MODULE_5__["qualityPresets"]["Medium"];
const defaultSignalBrushValue = 10;
const defaultSignalBrushSize = 1;
const defaultSignalFrequency = 3;
const defaultPermittivityBrushValue = 5;
const defaultPermeabilityBrushValue = 1;
const defaultConductivityBrushValue = 0;
const defaultMaterialBrushSize = 5;
const defaultBrushDrawShape = _em_drawing__WEBPACK_IMPORTED_MODULE_2__["DrawShape"].Square;
const initialDt = defaultPreset.dt;
const initialCellSize = defaultPreset.cellSize;
const initialSimulationSpeed = 1;
const initialGridSizeLongest = defaultPreset.gridSizeLongest;
const initialResolutionScale = defaultPreset.resolutionScale;
const initialWindowSize = [window.innerWidth, window.innerHeight];
const initialCanvasSize = calculateCanvasSize(initialWindowSize, initialResolutionScale);
const initialGridSize = calculateGridSize(initialGridSizeLongest, initialCanvasSize);
const initialReflectiveBoundary = false;

function calculateCanvasSize(windowSize, resolutionScale) {
  return [Math.round(windowSize[0] * resolutionScale), Math.round(windowSize[1] * resolutionScale)];
}

function calculateGridSize(gridSizeLongest, canvasSize) {
  const canvasAspect = canvasSize[0] / canvasSize[1];
  return canvasSize[0] >= canvasSize[1] ? [gridSizeLongest, Math.ceil(gridSizeLongest / canvasAspect)] : [Math.ceil(gridSizeLongest * canvasAspect), gridSizeLongest];
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  const urlShareId = window.location.hash ? window.location.hash.substr(1) : null;
  const [shareId, setShareId] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(urlShareId);
  const drawCanvasRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [canvasSize, setCanvasSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialCanvasSize);
  const [windowSize, setWindowSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialWindowSize);
  const [gridSizeLongest, setGridSizeLongest] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialGridSizeLongest);
  const [dt, setDt] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialDt);
  const [cellSize, setCellSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialCellSize);
  const [resolutionScale, setResolutionScale] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialResolutionScale);
  const [simulationSpeed, setSimulationSpeed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialSimulationSpeed);
  const [reflectiveBoundary, setReflectiveBoundary] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialReflectiveBoundary);
  const gridSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => calculateGridSize(gridSizeLongest, canvasSize), [canvasSize, gridSizeLongest]);
  const [em, setEm] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null); // Would use useMemo for gpu here, but useMemo does not seem to work with ref dependencies.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (drawCanvasRef.current) {
      setEm(Object(_em__WEBPACK_IMPORTED_MODULE_1__["createEM"])(drawCanvasRef.current, initialGridSize, initialCellSize, initialReflectiveBoundary, initialDt));
    }
  }, [drawCanvasRef]); // Window resize canvas

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const adjustCanvasSize = () => {
      const wndSize = [window.innerWidth, window.innerHeight];
      setCanvasSize(calculateCanvasSize(wndSize, resolutionScale));
      setWindowSize(wndSize);
    };

    adjustCanvasSize();
    window.addEventListener("resize", adjustCanvasSize);
    return () => window.removeEventListener("resize", adjustCanvasSize);
  }, [resolutionScale]); // Load share id

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (em && urlShareId) {
      setShowLoading(true);
      console.log(`Loading ${urlShareId}`);
      Object(_share__WEBPACK_IMPORTED_MODULE_6__["getSharedSimulatorMap"])(urlShareId).then(simulatorMap => {
        // Load material
        em.loadMaterialFromComponents(simulatorMap.materialMap.permittivity, simulatorMap.materialMap.permeability, simulatorMap.materialMap.conductivity); // Load settings

        setDt(simulatorMap.simulationSettings.dt);
        setGridSizeLongest(Math.max(simulatorMap.simulationSettings.gridSize[0], simulatorMap.simulationSettings.gridSize[1]));
        setCellSize(simulatorMap.simulationSettings.cellSize); // Load sources

        em.setSources(simulatorMap.sourceDescriptors.map(desc => Object(_em_serialization__WEBPACK_IMPORTED_MODULE_3__["descriptorToSignalSource"])(desc)));
        console.log(`Loaded ${urlShareId}`);
      }).catch(err => console.error(`Error getting share ${urlShareId}: ${JSON.stringify(err)}`)).finally(() => setShowLoading(false));
    }
  }, [em, urlShareId]); // Update render sim output size

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (em) {
      em.adjustCanvasSize(canvasSize);
      em.resetFields();
      em.resetMaterials();
    }
  }, [em, canvasSize]); // Update simulator grid size

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (em) {
      em.setGridSize(gridSize);
      em.resetFields();
      em.resetMaterials();
    }
  }, [em, gridSize]); // Update simulator cell size

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (em) {
      em.setCellSize(cellSize);
    }
  }, [em, cellSize]); // Update reflective boundary

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (em) {
      em.setReflectiveBoundary(reflectiveBoundary);
    }
  }, [em, reflectiveBoundary]);
  const [signalBrushSize, setSignalBrushSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultSignalBrushSize);
  const [signalBrushValue, setSignalBrushValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultSignalBrushValue);
  const [activeBrushShape, setActiveBrushDrawShape] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultBrushDrawShape);
  const [materialBrushSize, setMaterialBrushSize] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultMaterialBrushSize);
  const [permittivityBrushValue, setPermittivityBrushValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultPermittivityBrushValue);
  const [permeabilityBrushValue, setPermeabilityBrushValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultPermeabilityBrushValue);
  const [conductivityBrushValue, setConductivityBrushValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultConductivityBrushValue);
  const [signalFrequency, setSignalFrequency] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultSignalFrequency);
  const [activeBrush, setActiveBrush] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_components__WEBPACK_IMPORTED_MODULE_4__["BrushType"].Signal);
  const [mousePosition, setMousePosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const signalStrength = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(0);
  const mouseDownPos = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [shareInProgress, setShareInProgress] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [sideMenuCollapsed, setSideMenuCollapsed] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [infoVisible, setInfoVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [showLoading, setShowLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Snap input across a line

  const [snapInput, setSnapInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // Convert from window location to the coordinates used
  // by the simulator's draw function.

  const windowToSimulationPoint = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return windowPoint => {
      const simulationPoint = [Object(_util__WEBPACK_IMPORTED_MODULE_5__["clamp"])(0, 1, windowPoint[0] / windowSize[0]), Object(_util__WEBPACK_IMPORTED_MODULE_5__["clamp"])(0, 1, 1 - windowPoint[1] / windowSize[1])];
      return simulationPoint;
    };
  }, [windowSize]); // Simulate one step

  const simStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (em) {
      if (mouseDownPos.current !== null) {
        const center = windowToSimulationPoint(mouseDownPos.current);
        const brushHalfSize = [signalBrushSize / gridSize[0] / 2, signalBrushSize / gridSize[1] / 2];
        const value = -signalBrushValue * 2000 * Math.cos(2 * Math.PI * signalFrequency * em.getTime());
        const drawInfo = activeBrushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_2__["DrawShape"].Square ? Object(_em_drawing__WEBPACK_IMPORTED_MODULE_2__["makeDrawSquareInfo"])(center, brushHalfSize, value) : Object(_em_drawing__WEBPACK_IMPORTED_MODULE_2__["makeDrawEllipseInfo"])(center, brushHalfSize, value);
        em.injectSignal(drawInfo, dt);
      }

      em.stepSim(dt);
    }
  }, [em, dt, signalFrequency, signalBrushValue, signalBrushSize, windowToSimulationPoint, activeBrushShape, gridSize]); // Change simulation speed

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (simulationSpeed > 0) {
      const timer = setInterval(simStep, 1000 / simulationSpeed * dt);
      return () => clearInterval(timer);
    }

    return undefined;
  }, [simStep, dt, simulationSpeed]); // Draw one frame

  const drawStep = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (em) {
      if (drawCanvasRef.current) {
        const cnvSize = calculateCanvasSize([window.innerWidth, window.innerHeight], resolutionScale);
        drawCanvasRef.current.width = cnvSize[0];
        drawCanvasRef.current.height = cnvSize[1];
      }

      em === null || em === void 0 ? void 0 : em.renderToCanvas(true, true);
    }
  }, [em, resolutionScale, drawCanvasRef]); // Draw loop

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let stop = false;

    const drawIfNotStopped = () => {
      if (!stop) {
        drawStep();
        requestAnimationFrame(drawIfNotStopped);
      }
    };

    requestAnimationFrame(drawIfNotStopped);
    return () => {
      stop = true;
    };
  }, [drawStep]); // Reset materials in the simulator

  const resetMaterials = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (em) {
      em.setSources([]);
      em.resetMaterials();
    }
  }, [em]); // Reset fields in the simulator

  const resetFields = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (em) {
      em.resetFields();
      signalStrength.current = 0;
    }
  }, [em]);
  const [isInputDown, setIsInputDown] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const activeBrushSize = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => (activeBrush === _components__WEBPACK_IMPORTED_MODULE_4__["BrushType"].Signal ? signalBrushSize : materialBrushSize) * (canvasSize[0] / gridSize[0]), [activeBrush, signalBrushSize, materialBrushSize, canvasSize, gridSize]);
  const [sideBar, setSideBar] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_components__WEBPACK_IMPORTED_MODULE_4__["SideBarType"].SignalBrush);
  const [shareVisible, setShareVisible] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const hideWhenInputDownStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => isInputDown ? {
    pointerEvents: "none",
    opacity: 0.2
  } : {}, [isInputDown]);
  const generateShareUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (em) {
      setShareInProgress(true);
      const material = em.getMaterial();

      if (material) {
        Object(_share__WEBPACK_IMPORTED_MODULE_6__["shareSimulatorMap"])({
          materialMap: Object(_em_serialization__WEBPACK_IMPORTED_MODULE_3__["makeMaterialMap"])(material),
          simulationSettings: {
            cellSize: cellSize,
            dt: dt,
            gridSize: gridSize,
            simulationSpeed: 1
          },
          sourceDescriptors: em.getSources().map(source => Object(_em_serialization__WEBPACK_IMPORTED_MODULE_3__["signalSourceToDescriptor"])(source))
        }).then(shareId => setShareId(shareId)).catch(err => console.log("Error uploading share: " + JSON.stringify(err))).finally(() => setShareInProgress(false));
      }
    }
  }, [dt, cellSize, gridSize, em]);
  const shareUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return shareId ? `${window.location.origin}${window.location.pathname}#${shareId}` : null;
  }, [shareId]); // Open side menu when switching the side bar

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setSideMenuCollapsed(false);
  }, [sideBar]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["FullscreenView"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["InteractiveCanvas"], {
    activeBrush: activeBrush,
    activeBrushShape: activeBrushShape,
    canvasSize: canvasSize,
    conductivityBrushValue: conductivityBrushValue,
    drawCanvasRef: drawCanvasRef,
    em: em,
    gridSize: gridSize,
    materialBrushSize: materialBrushSize,
    mouseDownPos: mouseDownPos,
    permeabilityBrushValue: permeabilityBrushValue,
    permittivityBrushValue: permittivityBrushValue,
    setIsInputDown: setIsInputDown,
    setMousePosition: setMousePosition,
    snapInput: snapInput,
    windowSize: windowSize,
    windowToSimulationPoint: windowToSimulationPoint,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BrushCursor"], {
    mousePosition: mousePosition,
    activeBrushSize: activeBrushSize,
    brushShape: activeBrushShape,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["BrushSelectionButtons"], {
    activeSideBar: sideBar,
    setActiveSideBar: setSideBar,
    setActiveBrush: setActiveBrush,
    extraStyle: hideWhenInputDownStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MenuSelectionButtons"], {
    activeSideBar: sideBar,
    setActiveSideBar: setSideBar,
    extraStyle: hideWhenInputDownStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ResetButtons"], {
    resetFields: resetFields,
    resetMaterials: resetMaterials,
    extraStyle: hideWhenInputDownStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["CollapsibleContainer"], {
    collapsed: sideMenuCollapsed,
    setCollapsed: setSideMenuCollapsed,
    title: sideBar.toString(),
    style: {
      position: "absolute",
      top: "50%",
      height: "400px",
      marginTop: "-200px",
      right: 0,
      opacity: 0.9,
      ...hideWhenInputDownStyle
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MultiMenu"], {
    activeState: sideBar,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MultiMenuChild"], {
    activateForState: _components__WEBPACK_IMPORTED_MODULE_4__["SideBarType"].SignalBrush,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["SignalBrushMenu"], {
    signalBrushSize: signalBrushSize,
    setSignalBrushSize: setSignalBrushSize,
    signalBrushValue: signalBrushValue,
    setSignalBrushValue: setSignalBrushValue,
    signalFrequency: signalFrequency,
    setSignalFrequency: setSignalFrequency,
    activeBrushShape: activeBrushShape,
    setActiveBrushDrawShape: setActiveBrushDrawShape,
    snapInput: snapInput,
    setSnapInput: setSnapInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MultiMenuChild"], {
    activateForState: _components__WEBPACK_IMPORTED_MODULE_4__["SideBarType"].MaterialBrush,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MaterialBrushMenu"], {
    materialBrushSize: materialBrushSize,
    setMaterialBrushSize: setMaterialBrushSize,
    permittivityBrushValue: permittivityBrushValue,
    setPermittivityBrushValue: setPermittivityBrushValue,
    permeabilityBrushValue: permeabilityBrushValue,
    setPermeabilityBrushValue: setPermeabilityBrushValue,
    conductivityBrushValue: conductivityBrushValue,
    setConductivityBrushValue: setConductivityBrushValue,
    activeBrushShape: activeBrushShape,
    setActiveBrushDrawShape: setActiveBrushDrawShape,
    snapInput: snapInput,
    setSnapInput: setSnapInput,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MultiMenuChild"], {
    activateForState: _components__WEBPACK_IMPORTED_MODULE_4__["SideBarType"].Settings,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"], {
    gridSizeLongest: gridSizeLongest,
    setGridSizeLongest: setGridSizeLongest,
    simulationSpeed: simulationSpeed,
    setSimulationSpeed: setSimulationSpeed,
    resolutionScale: resolutionScale,
    setResolutionScale: setResolutionScale,
    cellSize: cellSize,
    setCellSize: setCellSize,
    reflectiveBoundary: reflectiveBoundary,
    setReflectiveBoundary: setReflectiveBoundary,
    dt: dt,
    setDt: setDt,
    qualityPresets: _util__WEBPACK_IMPORTED_MODULE_5__["qualityPresets"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 25
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["MultiMenuChild"], {
    activateForState: _components__WEBPACK_IMPORTED_MODULE_4__["SideBarType"].Examples,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"], {
    em: em,
    setCellSize: setCellSize,
    setDt: setDt,
    setGridSizeLongest: setGridSizeLongest,
    setSimulationSpeed: setSimulationSpeed,
    gridSize: gridSize,
    dt: dt,
    cellSize: cellSize,
    simulationSpeed: simulationSpeed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 349,
      columnNumber: 25
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ShareBox"], {
    visible: shareVisible,
    setVisible: setShareVisible,
    shareUrl: shareUrl,
    shareInProgress: shareInProgress,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["LoadingIndicator"], {
    visible: shareVisible && (shareInProgress || !shareUrl) || showLoading,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360,
      columnNumber: 9
    }
  }));
});

/***/ }),

/***/ "./src/components.tsx":
/*!****************************!*\
  !*** ./src/components.tsx ***!
  \****************************/
/*! exports provided: CollapsibleContainer, LabeledSlider, OptionSelector, ExamplesComponent, SettingsComponent, ImageButton, ShareComponent, MaterialBrushMenu, SignalBrushMenu, MultiMenuChild, MultiMenu, InfoBox, LoadingIndicator, ShareBox, ResetButtons, SideBarType, BrushType, BrushSelectionButtons, MenuSelectionButtons, BrushCursor, MiscButtons, InteractiveCanvas, FullscreenView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleContainer", function() { return CollapsibleContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabeledSlider", function() { return LabeledSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionSelector", function() { return OptionSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageButton", function() { return ImageButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareComponent", function() { return ShareComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialBrushMenu", function() { return MaterialBrushMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignalBrushMenu", function() { return SignalBrushMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiMenuChild", function() { return MultiMenuChild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiMenu", function() { return MultiMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoBox", function() { return InfoBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingIndicator", function() { return LoadingIndicator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareBox", function() { return ShareBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetButtons", function() { return ResetButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideBarType", function() { return SideBarType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushType", function() { return BrushType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushSelectionButtons", function() { return BrushSelectionButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuSelectionButtons", function() { return MenuSelectionButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrushCursor", function() { return BrushCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscButtons", function() { return MiscButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractiveCanvas", function() { return InteractiveCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullscreenView", function() { return FullscreenView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _em_drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./em/drawing */ "./src/em/drawing.ts");
/* harmony import */ var _em_sources__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./em/sources */ "./src/em/sources.ts");
/* harmony import */ var _em_maps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./em/maps */ "./src/em/maps.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-spinners */ "./node_modules/react-spinners/index.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons */ "./src/icons/index.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\sim\\maxwell-simulation\\src\\components.tsx";







function CollapsibleContainer(props) {
  const {
    collapsed,
    setCollapsed,
    id,
    className,
    buttonStyle,
    style,
    children,
    title
  } = props;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: id,
    className: className,
    style: {
      textAlign: "center",
      background: "rgb(33, 33, 33)",
      fontWeight: "lighter",
      color: "white",
      height: "400px",
      ...style
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: e => setCollapsed(!collapsed),
    style: {
      width: "30px",
      float: "left",
      height: "100%",
      background: "rgb(50, 50, 50)",
      border: "0px",
      color: "white",
      fontWeight: "bold",
      fontSize: "20px",
      cursor: "pointer",
      ...buttonStyle
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, collapsed ? "<" : ">"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      float: "right"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, !collapsed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: "20px",
      marginTop: "4px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, title), children)));
}
function LabeledSlider(props) {
  const {
    value,
    setValue,
    allowNegative,
    logarithmic,
    displayDigits
  } = props;
  const absValue = logarithmic ? Math.log2(Math.abs(value)) : Math.abs(value);
  const [negative, setNegative] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value < 0);
  const rangeSliderRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const updateValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (rangeSliderRef.current) {
      let newValue = parseFloat(rangeSliderRef.current.value);

      if (logarithmic) {
        newValue = Math.pow(2, newValue);
      }

      setValue((negative ? -1 : 1) * newValue);
    }
  }, [setValue, negative, logarithmic, rangeSliderRef]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => updateValue(), [negative, updateValue]);
  const displayValue = displayDigits !== undefined ? value.toFixed(displayDigits) : value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, props.label), allowNegative && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    style: {
      marginLeft: "10px"
    },
    type: "checkbox",
    checked: negative,
    onChange: e => setNegative(e.target.checked),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, "Negative")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "range",
    ref: rangeSliderRef,
    min: props.min,
    max: props.max,
    value: absValue,
    step: props.step,
    onChange: updateValue,
    style: {
      height: 10,
      width: "100%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center",
      lineHeight: 0.2,
      marginBottom: "7px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, displayValue)));
}
function OptionSelector(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: props.style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, props.options.map((option, optionIndex) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    key: option,
    style: {
      backgroundColor: "rgb(50, 50, 50)",
      color: "white",
      border: optionIndex === props.selectedOption ? "3px solid rgb(0, 150, 255)" : "0",
      height: "30px",
      width: "70px",
      overflow: "hidden",
      textOverflow: "hidden",
      ...props.buttonStyle
    },
    onClick: e => props.setSelectedOption(optionIndex),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, option)));
}
function ExamplesComponent(props) {
  const {
    em,
    setGridSizeLongest,
    setDt,
    setCellSize,
    setSimulationSpeed
  } = props;
  const loadMap = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(simulatorMap => {
    if (em) {
      em.resetFields();
      em.loadMaterialFromComponents(simulatorMap.materialMap.permittivity, simulatorMap.materialMap.permeability, simulatorMap.materialMap.conductivity);
      const loadedSources = simulatorMap.sourceDescriptors.map(desc => {
        if (desc.type === "point") {
          return new _em_sources__WEBPACK_IMPORTED_MODULE_2__["PointSignalSource"](desc.amplitude, desc.frequency, desc.position, desc.turnOffTime);
        }

        throw new Error(`Unsupported source type: ${desc.type}`);
      });
      setCellSize(simulatorMap.simulationSettings.cellSize);
      setDt(simulatorMap.simulationSettings.dt);
      setSimulationSpeed(simulatorMap.simulationSettings.simulationSpeed);
      setGridSizeLongest(Math.max(simulatorMap.simulationSettings.gridSize[0], simulatorMap.simulationSettings.gridSize[1]));
      em.setSources(loadedSources);
    }
  }, [em, setCellSize, setDt, setSimulationSpeed, setGridSizeLongest]);
  const simulationSettings = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    return {
      dt: props.dt,
      cellSize: props.cellSize,
      gridSize: props.gridSize,
      simulationSpeed: props.simulationSpeed
    };
  }, [props.dt, props.cellSize, props.gridSize, props.simulationSpeed]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "5px",
      width: "150px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: _ => loadMap(_em_maps__WEBPACK_IMPORTED_MODULE_3__["empty"](simulationSettings)),
    style: {
      backgroundColor: "rgb(50, 50, 50)",
      width: "100%",
      border: "0px",
      color: "white",
      margin: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 18
    }
  }, "Empty")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: _ => loadMap(_em_maps__WEBPACK_IMPORTED_MODULE_3__["doubleSlit"](simulationSettings)),
    style: {
      backgroundColor: "rgb(50, 50, 50)",
      width: "100%",
      border: "0px",
      color: "white",
      margin: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 18
    }
  }, "Double slit")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: _ => loadMap(_em_maps__WEBPACK_IMPORTED_MODULE_3__["fiberOptics"](simulationSettings)),
    style: {
      backgroundColor: "rgb(50, 50, 50)",
      width: "100%",
      border: "0px",
      color: "white",
      margin: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 18
    }
  }, "Fiber optics")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: _ => loadMap(_em_maps__WEBPACK_IMPORTED_MODULE_3__["lens"](simulationSettings)),
    style: {
      backgroundColor: "rgb(50, 50, 50)",
      width: "100%",
      border: "0px",
      color: "white",
      margin: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 18
    }
  }, "Lens")));
}
function SettingsComponent(props) {
  const {
    qualityPresets,
    setCellSize,
    setGridSizeLongest,
    setResolutionScale,
    setDt
  } = props;
  const onPresetClicked = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(preset => {
    setCellSize(preset.cellSize);
    setGridSizeLongest(preset.gridSizeLongest);
    setResolutionScale(preset.resolutionScale);
    setDt(preset.dt);
  }, [setCellSize, setGridSizeLongest, setResolutionScale, setDt]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 13
    }
  }, "Quality presets"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 13
    }
  }, Object.keys(qualityPresets).map(presetName => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    key: presetName,
    onClick: _ => onPresetClicked(qualityPresets[presetName]),
    style: {
      backgroundColor: "rgb(50, 50, 50)",
      border: "0px",
      color: "white",
      margin: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }, presetName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "Grid length",
    value: props.gridSizeLongest,
    setValue: props.setGridSizeLongest,
    min: 100,
    max: 2000,
    step: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "Time step size",
    value: props.dt,
    setValue: props.setDt,
    min: 0.001,
    max: 0.1,
    step: 0.001,
    allowNegative: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "Cell size",
    value: props.cellSize,
    setValue: props.setCellSize,
    min: 0.002,
    max: 0.2,
    step: 0.001,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "Resolution scale",
    value: props.resolutionScale,
    setValue: props.setResolutionScale,
    min: 0.1,
    max: 2,
    step: 0.1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "Simulation speed",
    value: props.simulationSpeed,
    setValue: props.setSimulationSpeed,
    min: 0,
    max: 10,
    step: 0.1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    checked: props.reflectiveBoundary,
    onChange: e => props.setReflectiveBoundary(e.target.checked),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }), "Reflective boundary");
}
function ImageButton(props) {
  const size = props.size || 48;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.onClick,
    style: {
      margin: "2px",
      padding: "5px",
      background: "transparent",
      border: props.highlight ? "2px solid rgb(0, 150, 255)" : "2px solid transparent",
      borderRadius: "10px",
      lineHeight: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    width: size,
    height: size,
    src: props.src,
    alt: "",
    style: {
      width: size,
      height: size
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  }));
}
function ShareComponent(props) {
  const {
    shareTitle,
    shareText,
    shareUrl
  } = props;
  const shareUrlTextRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const onCopyClicked = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (shareUrlTextRef.current) {
      shareUrlTextRef.current.select();
      document.execCommand("copy");
    }
  }, [shareUrlTextRef]);
  const onShareClicked = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    const nav = navigator;

    if (nav.share) {
      nav.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl
      }).then(() => console.log("Shared")).catch(err => console.error(`Share failed: ${err}`));
    }
  }, [shareUrl, shareTitle, shareText]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291,
      columnNumber: 9
    }
  }, shareUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: shareUrlTextRef,
    readOnly: true,
    type: "text",
    value: shareUrl,
    style: {
      background: "rgba(50, 50, 50, 100)",
      border: "0px",
      color: "white",
      margin: "2px",
      width: "70%"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 25
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onCopyClicked,
    style: {
      background: "rgba(50, 50, 50, 100)",
      border: "0px",
      color: "white",
      margin: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 25
    }
  }, "Copy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 21
    }
  }, navigator.share !== undefined && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onShareClicked,
    style: {
      background: "rgba(50, 50, 50, 100)",
      border: "0px",
      width: "80%",
      fontSize: "24px",
      color: "white",
      margin: "2px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299,
      columnNumber: 68
    }
  }, "Share"))));
}
function MaterialBrushMenu(props) {
  const {
    activeBrushShape,
    setActiveBrushDrawShape
  } = props;
  const brushShapeIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => activeBrushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square ? 0 : 1, [activeBrushShape]);
  const setBrushShapeIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => setActiveBrushDrawShape(index === 0 ? _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square : _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Ellipse), [setActiveBrushDrawShape]);
  const brushSizeLabel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => activeBrushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square ? "Brush size" : "Brush radius", [activeBrushShape]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    checked: props.snapInput,
    onChange: e => props.setSnapInput(e.target.checked),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 13
    }
  }, "Snap to 45\xB0 line"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptionSelector, {
    buttonStyle: {
      height: "24px"
    },
    options: ["Square", "Circle"],
    selectedOption: brushShapeIndex,
    setSelectedOption: setBrushShapeIndex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: brushSizeLabel,
    value: props.materialBrushSize,
    setValue: props.setMaterialBrushSize,
    min: 1,
    max: 100,
    step: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "\u03B5 value",
    value: props.permittivityBrushValue,
    setValue: props.setPermittivityBrushValue,
    min: -1,
    max: 10,
    step: 0.1,
    allowNegative: true,
    logarithmic: true,
    displayDigits: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "\xB5 value",
    value: props.permeabilityBrushValue,
    setValue: props.setPermeabilityBrushValue,
    min: -1,
    max: 10,
    step: 0.1,
    allowNegative: true,
    logarithmic: true,
    displayDigits: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "\u03C3 value",
    value: props.conductivityBrushValue,
    setValue: props.setConductivityBrushValue,
    min: 0,
    max: 20,
    step: 0.25,
    allowNegative: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348,
      columnNumber: 17
    }
  })));
}
function SignalBrushMenu(props) {
  const {
    activeBrushShape,
    setActiveBrushDrawShape
  } = props;
  const brushShapeIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => activeBrushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square ? 0 : 1, [activeBrushShape]);
  const setBrushShapeIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(index => setActiveBrushDrawShape(index === 0 ? _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square : _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Ellipse), [setActiveBrushDrawShape]);
  const brushSizeLabel = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => activeBrushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square ? "Brush size" : "Brush radius", [activeBrushShape]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    checked: props.snapInput,
    onChange: e => props.setSnapInput(e.target.checked),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 382,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 383,
      columnNumber: 13
    }
  }, "Snap to 45\xB0 line"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OptionSelector, {
    buttonStyle: {
      height: "24px"
    },
    options: ["Square", "Circle"],
    selectedOption: brushShapeIndex,
    setSelectedOption: setBrushShapeIndex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: brushSizeLabel,
    value: props.signalBrushSize,
    setValue: props.setSignalBrushSize,
    min: 1,
    max: 100,
    step: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 387,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "Signal amplitude",
    value: props.signalBrushValue,
    setValue: props.setSignalBrushValue,
    min: 1,
    max: 100,
    step: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LabeledSlider, {
    label: "Signal frequency",
    value: props.signalFrequency,
    setValue: props.setSignalFrequency,
    min: 0,
    max: 25,
    step: 0.25,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 391,
      columnNumber: 17
    }
  })));
}
function MultiMenuChild(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.children);
}
function MultiMenu(props) {
  const activeChildren = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    var _props$children;

    return (_props$children = props.children) === null || _props$children === void 0 ? void 0 : _props$children.filter(child => child.props.activateForState === props.activeState);
  }, [props.activeState, props.children]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, activeChildren);
}
function InfoBox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: _ => props.setVisible(false),
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      backgroundColor: "rgb(30, 30, 30)",
      left: "50%",
      top: "50%",
      marginLeft: "-150px",
      marginTop: "-70px",
      width: "300px",
      height: "140px",
      textAlign: "center",
      padding: "10px",
      color: "white",
      fontWeight: "lighter"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434,
      columnNumber: 17
    }
  }, "Made by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/RobinKa",
    style: {
      textDecoration: "none",
      color: "rgb(0, 150, 255)"
    },
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 29
    }
  }, "Robin Kahlow"), ". If you have feedback, ideas for improvement, bug reports or anything else open an issue on ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/RobinKa/maxwell-simulation/issues",
    style: {
      textDecoration: "none",
      color: "rgb(0, 150, 255)"
    },
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 279
    }
  }, "GitHub"), " or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:tora@warlock.ai?subject=EM simulation feedback",
    style: {
      textDecoration: "none",
      color: "rgb(0, 150, 255)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 435,
      columnNumber: 460
    }
  }, "send an email to tora@warlock.ai"), "."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/RobinKa/maxwell-simulation",
    style: {
      textDecoration: "none",
      color: "rgb(0, 150, 255)"
    },
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 21
    }
  }, "Source code")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      marginTop: "5px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442,
      columnNumber: 17
    }
  }, "Icons by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://icons8.com/",
    style: {
      textDecoration: "none",
      color: "rgb(0, 150, 255)"
    },
    rel: "noopener noreferrer",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 443,
      columnNumber: 30
    }
  }, "Icons8")))));
}
function LoadingIndicator(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 456,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 457,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      marginLeft: "-75px",
      marginTop: "-75px",
      width: "150px",
      height: "150px",
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_5__["BounceLoader"], {
    color: "rgb(0, 150, 255)",
    size: 100,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 17
    }
  }))));
}
function ShareBox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, props.visible && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: _ => props.setVisible(false),
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: "rgba(0, 0, 0, 0.5)"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 475,
      columnNumber: 13
    }
  }), !(props.shareInProgress || !props.shareUrl) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      backgroundColor: "rgb(30, 30, 30)",
      left: "50%",
      top: "50%",
      marginLeft: "-150px",
      marginTop: "-30px",
      width: "300px",
      height: "60px",
      textAlign: "center",
      padding: "10px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ShareComponent, {
    shareUrl: props.shareUrl,
    shareText: "Check out what I made in this interactive web-based simulator for electromagnetic waves!",
    shareTitle: "EM Simulator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 21
    }
  }))));
}
function ResetButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      bottom: "10px",
      left: "10px",
      ...props.extraStyle
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: props.resetFields,
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["ResetFields"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: props.resetMaterials,
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["ResetMaterials"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 13
    }
  }));
}
let SideBarType;

(function (SideBarType) {
  SideBarType["SignalBrush"] = "Signal Brush";
  SideBarType["MaterialBrush"] = "Material Brush";
  SideBarType["Settings"] = "Settings";
  SideBarType["Examples"] = "Examples";
})(SideBarType || (SideBarType = {}));

let BrushType;

(function (BrushType) {
  BrushType[BrushType["Material"] = 0] = "Material";
  BrushType[BrushType["Signal"] = 1] = "Signal";
})(BrushType || (BrushType = {}));

function BrushSelectionButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      top: "10px",
      left: "10px",
      ...props.extraStyle
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: _ => {
      props.setActiveSideBar(SideBarType.SignalBrush);
      props.setActiveBrush(BrushType.Signal);
    },
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["SignalBrush"],
    highlight: props.activeSideBar === SideBarType.SignalBrush,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: _ => {
      props.setActiveSideBar(SideBarType.MaterialBrush);
      props.setActiveBrush(BrushType.Material);
    },
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["MaterialBrush"],
    highlight: props.activeSideBar === SideBarType.MaterialBrush,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 13
    }
  }));
}
function MenuSelectionButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      top: "10px",
      right: "10px",
      ...props.extraStyle
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: _ => props.setActiveSideBar(SideBarType.Examples),
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["Examples"],
    highlight: props.activeSideBar === SideBarType.Examples,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: _ => props.setActiveSideBar(SideBarType.Settings),
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["Settings"],
    highlight: props.activeSideBar === SideBarType.Settings,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: _util__WEBPACK_IMPORTED_MODULE_4__["toggleFullScreen"],
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["Fullscreen"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 13
    }
  }));
}
function BrushCursor(props) {
  const cursorStyle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => {
    if (props.mousePosition) {
      const style = {
        position: "absolute",
        pointerEvents: "none",
        left: props.mousePosition[0] - props.activeBrushSize / 2,
        top: props.mousePosition[1] - props.activeBrushSize / 2,
        width: props.activeBrushSize,
        height: props.activeBrushSize,
        border: "2px solid rgb(255, 89, 0)"
      };

      if (props.brushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Ellipse) {
        style.borderRadius = "50%";
      }

      return style;
    }

    return null;
  }, [props]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, cursorStyle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: cursorStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 574,
      columnNumber: 25
    }
  }));
}
function MiscButtons(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      bottom: 10,
      right: 10,
      ...props.extraStyle
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 589,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: _ => {
      props.generateShareUrl();
      props.setShareVisible(!props.shareVisible);
    },
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["Share"],
    highlight: props.shareVisible,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    onClick: _ => props.setInfoVisible(!props.infoVisible),
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["Info"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 591,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/RobinKa/maxwell-simulation",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageButton, {
    src: _icons__WEBPACK_IMPORTED_MODULE_6__["GitHub"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592,
      columnNumber: 69
    }
  })));
}
function InteractiveCanvas(props) {
  const {
    em,
    gridSize,
    materialBrushSize,
    permittivityBrushValue,
    permeabilityBrushValue,
    conductivityBrushValue,
    activeBrushShape,
    windowToSimulationPoint,
    activeBrush,
    mouseDownPos,
    setIsInputDown,
    snapInput,
    windowSize,
    canvasSize,
    setMousePosition,
    drawCanvasRef
  } = props;
  const changeMaterial = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(canvasPos => {
    if (em) {
      const center = windowToSimulationPoint(canvasPos);
      const brushHalfSize = [materialBrushSize / gridSize[0] / 2, materialBrushSize / gridSize[1] / 2];
      em.drawMaterial("permittivity", activeBrushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square ? Object(_em_drawing__WEBPACK_IMPORTED_MODULE_1__["makeDrawSquareInfo"])(center, brushHalfSize, permittivityBrushValue) : Object(_em_drawing__WEBPACK_IMPORTED_MODULE_1__["makeDrawEllipseInfo"])(center, brushHalfSize, permittivityBrushValue));
      em.drawMaterial("permeability", activeBrushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square ? Object(_em_drawing__WEBPACK_IMPORTED_MODULE_1__["makeDrawSquareInfo"])(center, brushHalfSize, permeabilityBrushValue) : Object(_em_drawing__WEBPACK_IMPORTED_MODULE_1__["makeDrawEllipseInfo"])(center, brushHalfSize, permeabilityBrushValue));
      em.drawMaterial("conductivity", activeBrushShape === _em_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square ? Object(_em_drawing__WEBPACK_IMPORTED_MODULE_1__["makeDrawSquareInfo"])(center, brushHalfSize, conductivityBrushValue) : Object(_em_drawing__WEBPACK_IMPORTED_MODULE_1__["makeDrawEllipseInfo"])(center, brushHalfSize, conductivityBrushValue));
    }
  }, [em, gridSize, materialBrushSize, permittivityBrushValue, permeabilityBrushValue, conductivityBrushValue, activeBrushShape, windowToSimulationPoint]);
  const [drawingMaterial, setDrawingMaterial] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [inputStartPos, setInputStartPos] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const [inputDir, setInputDir] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const onInputDown = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(clientPos => {
    setInputStartPos(clientPos);

    if (activeBrush === BrushType.Signal) {
      mouseDownPos.current = clientPos;
    } else if (activeBrush === BrushType.Material) {
      changeMaterial(clientPos);
      setDrawingMaterial(true);
    }

    setIsInputDown(true);
  }, [changeMaterial, activeBrush, mouseDownPos, setIsInputDown]);
  const onInputMove = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])((clientPos, shiftDown) => {
    let pos = clientPos; // If snapping, change the position to lie along the draw line

    if ((snapInput || shiftDown) && inputStartPos) {
      const offset = [pos[0] - inputStartPos[0], pos[1] - inputStartPos[1]];

      if (inputDir) {
        const projection = offset[0] * inputDir[0] + offset[1] * inputDir[1];
        pos = [inputStartPos[0] + projection * inputDir[0], inputStartPos[1] + projection * inputDir[1]];
      } else {
        const offsetLengthSq = offset[0] * offset[0] + offset[1] * offset[1];
        const minimumSnapLengthSq = 0.01 * 0.01 * (windowSize[0] * windowSize[0] + windowSize[1] * windowSize[1]);

        if (offsetLengthSq > minimumSnapLengthSq) {
          // Snap to discrete angles
          const angleQuantum = Math.PI / 4;
          const snappedAngle = Math.round(Math.atan2(offset[1], offset[0]) / angleQuantum) * angleQuantum;
          const dir = [Math.cos(snappedAngle), Math.sin(snappedAngle)];
          setInputDir(dir);
        }
      }
    }

    if (activeBrush === BrushType.Signal && mouseDownPos.current !== null) {
      mouseDownPos.current = pos;
    }

    if (drawingMaterial) {
      changeMaterial(pos);
    }
  }, [changeMaterial, activeBrush, drawingMaterial, inputDir, inputStartPos, windowSize, snapInput, mouseDownPos]);
  const onInputUp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (activeBrush === BrushType.Signal) {
      mouseDownPos.current = null;
    } else if (activeBrush === BrushType.Material) {
      setDrawingMaterial(false);
    }

    setInputDir(null);
    setInputStartPos(null);
    setIsInputDown(false);
  }, [activeBrush, mouseDownPos, setIsInputDown]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("canvas", {
    width: canvasSize[0],
    height: canvasSize[1],
    ref: drawCanvasRef,
    style: {
      position: "absolute",
      width: windowSize[0],
      height: windowSize[1],
      cursor: "none"
    },
    onMouseDown: e => onInputDown([e.clientX, e.clientY]),
    onMouseMove: e => {
      setMousePosition([e.clientX, e.clientY]);
      onInputMove([e.clientX, e.clientY], e.shiftKey);
    },
    onMouseUp: e => onInputUp(),
    onMouseLeave: e => onInputUp(),
    onTouchStart: e => {
      setMousePosition([e.touches[0].clientX, e.touches[0].clientY]);
      onInputDown([e.touches[0].clientX, e.touches[0].clientY]);
    },
    onTouchMove: e => {
      setMousePosition([e.touches[0].clientX, e.touches[0].clientY]);
      onInputMove([e.touches[0].clientX, e.touches[0].clientY]);
    },
    onTouchEnd: e => {
      setMousePosition(null);
      onInputUp();
    },
    onTouchCancel: e => {
      setMousePosition(null);
      onInputUp();
    },
    onContextMenu: e => e.preventDefault(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 708,
      columnNumber: 9
    }
  });
}
function FullscreenView(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      touchAction: "none",
      userSelect: "none"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 728,
      columnNumber: 9
    }
  }, props.children);
}

/***/ }),

/***/ "./src/em/drawing.ts":
/*!***************************!*\
  !*** ./src/em/drawing.ts ***!
  \***************************/
/*! exports provided: DrawShape, makeDrawSquareInfo, makeDrawEllipseInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawShape", function() { return DrawShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDrawSquareInfo", function() { return makeDrawSquareInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeDrawEllipseInfo", function() { return makeDrawEllipseInfo; });
let DrawShape;

(function (DrawShape) {
  DrawShape["Square"] = "square";
  DrawShape["Ellipse"] = "ellipse";
})(DrawShape || (DrawShape = {}));

function makeDrawSquareInfo(center, halfSize, value) {
  return {
    drawShape: DrawShape.Square,
    center,
    halfSize: halfSize,
    value
  };
}
function makeDrawEllipseInfo(center, radius, value) {
  return {
    drawShape: DrawShape.Ellipse,
    center,
    radius,
    value
  };
}

/***/ }),

/***/ "./src/em/index.ts":
/*!*************************!*\
  !*** ./src/em/index.ts ***!
  \*************************/
/*! exports provided: createEM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEM", function() { return createEM; });
/* harmony import */ var _rendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendering */ "./src/em/rendering.ts");
/* harmony import */ var _simulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simulator */ "./src/em/simulator.ts");


function createEM(canvas, gridSize, cellSize, reflectiveBoundary, dt) {
  const regl = Object(_rendering__WEBPACK_IMPORTED_MODULE_0__["createReglFromCanvas"])(canvas);
  const {
    render,
    adjustCanvasSize,
    adjustGridSize
  } = Object(_rendering__WEBPACK_IMPORTED_MODULE_0__["makeRenderSimulatorCanvas"])(regl, [canvas.width, canvas.height], gridSize);
  const sim = new _simulator__WEBPACK_IMPORTED_MODULE_1__["FDTDSimulator"](regl, gridSize, cellSize, reflectiveBoundary, dt);

  const renderToCanvas = (showElectric, showMagnetic) => {
    const simData = sim.getData();
    render(simData.electricField.current, simData.magneticField.current, simData.material.current, sim.getCellSize(), sim.getGridSize(), showElectric, showMagnetic);
  };

  let sources = [];

  const stepSim = dt => {
    for (const source of sources) {
      source.inject(sim, dt);
    }

    sim.stepMagnetic(dt);
    sim.stepElectric(dt);
  };

  const setGridSize = newGridSize => {
    sim.setGridSize(newGridSize);
    adjustGridSize(newGridSize);
  };

  return {
    renderToCanvas: renderToCanvas,
    adjustCanvasSize: adjustCanvasSize,
    stepSim: stepSim,
    injectSignal: sim.injectSignal,
    getSources: () => sources,
    setSources: newSources => sources = newSources,
    setGridSize: setGridSize,
    setCellSize: sim.setCellSize,
    getTime: () => sim.getData().time,
    setReflectiveBoundary: sim.setReflectiveBoundary,
    loadMaterialFromComponents: sim.loadMaterialFromComponents,
    resetFields: sim.resetFields,
    resetMaterials: sim.resetMaterials,
    drawMaterial: sim.drawMaterial,
    getMaterial: sim.getMaterial
  };
}

/***/ }),

/***/ "./src/em/kernels/rendering.ts":
/*!*************************************!*\
  !*** ./src/em/kernels/rendering.ts ***!
  \*************************************/
/*! exports provided: renderEnergy, bloomExtract, blurDirectional, renderBackground, draw, vertDraw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderEnergy", function() { return renderEnergy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bloomExtract", function() { return bloomExtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blurDirectional", function() { return blurDirectional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderBackground", function() { return renderBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vertDraw", function() { return vertDraw; });
const renderEnergy = `
    precision highp float;

    uniform sampler2D electricField;
    uniform sampler2D magneticField;
    uniform sampler2D material;
    uniform float brightness;
    uniform float electricEnergyFactor;
    uniform float magneticEnergyFactor;

    varying vec2 uv;

    void main() {
        vec3 el = texture2D(electricField, uv).rgb;
        vec3 mag = texture2D(magneticField, uv).rgb;
        vec2 mat = texture2D(material, uv).rg;
        float brightnessSquared = brightness * brightness;

        vec2 energy = vec2(
            electricEnergyFactor * mat.x * dot(el, el),
            magneticEnergyFactor * mat.y * dot(mag, mag)
        );

        gl_FragColor = vec4(brightnessSquared * energy, 0.0, 0.0);
    }
`;
const bloomExtract = `
    precision highp float;

    uniform sampler2D texture;
    uniform float threshold;

    varying vec2 uv;

    void main() {
        vec4 col = texture2D(texture, uv);
        gl_FragColor = col * step(threshold, 0.5 * (col.r + col.g));
    }
`;
const blurDirectional = `
    precision highp float;

    uniform sampler2D texture;
    uniform vec2 direction;

    varying vec2 uv;

    void main() {
        gl_FragColor =
            0.227027 * texture2D(texture, uv) +
            0.1945946 * (texture2D(texture, uv + direction) + texture2D(texture, uv - direction)) +
            0.1216216 * (texture2D(texture, uv + 2.0 * direction) + texture2D(texture, uv - 2.0 * direction)) +
            0.054054 * (texture2D(texture, uv + 3.0 * direction) + texture2D(texture, uv - 3.0 * direction)) +
            0.016216 * (texture2D(texture, uv + 4.0 * direction) + texture2D(texture, uv - 4.0 * direction));
    }
`;
const renderBackground = `
    precision highp float;

    uniform vec2 gridSize;

    varying vec2 uv;

    const float sqrtTwoPi = 2.50662827463;

    void main() {
        vec2 tileFactor = gridSize;

        // Repeat -0.5..+0.5 sawtooth for as many cells as we have
        vec2 dPermittivity = mod(tileFactor * uv, 1.0) - 0.5;
        vec2 dPermeability = mod(tileFactor * uv + 0.5, 1.0) - 0.5;
        vec2 dConductivity = abs(mod(tileFactor * uv, 1.0) - 0.5);

        // Calculate distance to repeating center for each pixel.
        // Values will be in [0, 2 * PI]
        vec2 pCircleDists = sqrtTwoPi * vec2(
            dot(dPermittivity, dPermittivity),
            dot(dPermeability, dPermeability)
        );

        float bgPermittivity = -smoothstep(0.0, 1.0, pCircleDists.x);
        float bgPermeability = -smoothstep(0.0, 1.0, pCircleDists.y);

        gl_FragColor = vec4(
            bgPermittivity,
            bgPermeability,
            dConductivity.x,
            dConductivity.y
        );
    }
`;
const draw = `
    precision highp float;

    uniform sampler2D energyTexture;
    uniform sampler2D bloomTexture;
    uniform sampler2D materialTexture;
    uniform sampler2D backgroundTexture;

    varying vec2 uv;

    const float sqrtTwoPi = 2.50662827463;

    void main() {
        vec2 energy = texture2D(energyTexture, uv).rg;
        vec2 bloom = texture2D(bloomTexture, uv).rg;
        vec3 material = texture2D(materialTexture, uv).rgb;
        vec4 background = texture2D(backgroundTexture, uv);

        vec2 pValues = 2.0 / (1.0 + exp(-0.5 * (material.rg - 1.0))) - 1.0;
        float cValue = material.b / 10.0;

        float bgPermittivity = pValues.x >= 0.1 ? 1.0 + background.r : background.r;
        float bgPermeability = pValues.y >= 0.1 ? 1.0 + background.g : background.g;
        float backgroundConductivity = 0.5 * (cValue >= 0.0 ?
            cValue * smoothstep(0.0, 1.0, background.b) :
            -cValue * smoothstep(0.0, 1.0, background.a)
        );

        gl_FragColor = vec4(
            min(1.0, backgroundConductivity + 0.8 * bgPermittivity * pValues.x + energy.r + bloom.r),
            min(1.0, backgroundConductivity + bloom.r + bloom.g),
            min(1.0, backgroundConductivity + 0.8 * bgPermeability * pValues.y + energy.g + bloom.g),
            1.0
        );
    }
`;
const vertDraw = `
    precision highp float;
    attribute vec2 position;
    varying vec2 uv;
    void main() {
        uv = 0.5 * (position + 1.0);
        gl_Position = vec4(position, 0, 1);
    }
`;

/***/ }),

/***/ "./src/em/kernels/simulation.ts":
/*!**************************************!*\
  !*** ./src/em/kernels/simulation.ts ***!
  \**************************************/
/*! exports provided: updateAlphaBeta, updateElectric, updateMagnetic, injectSource, decaySource, drawSquare, drawEllipse, vert, copyUint8ToFloat16, copyFloat16ToUint8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAlphaBeta", function() { return updateAlphaBeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateElectric", function() { return updateElectric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMagnetic", function() { return updateMagnetic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectSource", function() { return injectSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decaySource", function() { return decaySource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawSquare", function() { return drawSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawEllipse", function() { return drawEllipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vert", function() { return vert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyUint8ToFloat16", function() { return copyUint8ToFloat16; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyFloat16ToUint8", function() { return copyFloat16ToUint8; });
const updateAlphaBeta = `
    precision highp float;

    uniform sampler2D material;
    uniform float dt;
    uniform float cellSize;

    varying vec2 uv;

    void main() {
        // Get material values
        vec3 mat = texture2D(material, uv).rgb;
        float permeability = mat.x;
        float permittivity = mat.y;
        float conductivity = mat.z;

        // Calculate alpha and beta for electric field
        float cEl = conductivity * dt / (2.0 * permeability);
        float dEl = 1.0 / (1.0 + cEl);
        float alphaEl = (1.0 - cEl) * dEl;
        float betaEl = dt / (permeability * cellSize) * dEl;

        // Calculate alpha and beta for magnetic field
        float cMag = conductivity * dt / (2.0 * permittivity);
        float dMag = 1.0 / (1.0 + cMag);
        float alphaMag = (1.0 - cMag) * dMag;
        float betaMag = dt / (permittivity * cellSize) * dMag;

        gl_FragColor = vec4(alphaEl, betaEl, alphaMag, betaMag);
    }
`;
const updateElectric = `
    precision highp float;

    uniform sampler2D electricField;
    uniform sampler2D magneticField;
    uniform sampler2D alphaBetaField;
    uniform vec2 relativeCellSize;
    uniform bool reflectiveBoundary;

    varying vec2 uv;

    void main() {
        if (!reflectiveBoundary) {
            vec2 b = 2.0 * relativeCellSize;

            float xAtMinBound = uv.x < b.x ? relativeCellSize.x : 0.0;
            float xAtMaxBound = uv.x + b.x >= 1.0 ? -relativeCellSize.x : 0.0;
            float yAtMinBound = uv.y < b.y ? relativeCellSize.y : 0.0;
            float yAtMaxBound = uv.y + b.y >= 1.0 ? -relativeCellSize.y : 0.0;

            if (xAtMinBound != 0.0 || xAtMaxBound != 0.0 || yAtMinBound != 0.0 || yAtMaxBound != 0.0) {
                gl_FragColor = texture2D(electricField, vec2(
                    uv.x + xAtMinBound + xAtMaxBound,
                    uv.y + yAtMinBound + yAtMaxBound
                ));
                return;
            }
        }

        vec2 alphaBeta = texture2D(alphaBetaField, uv).rg;
        
        vec3 el = texture2D(electricField, uv).rgb;
        vec3 mag = texture2D(magneticField, uv).rgb;
        vec3 magXN = texture2D(magneticField, uv - vec2(relativeCellSize.x, 0.0)).rgb;
        vec3 magYN = texture2D(magneticField, uv - vec2(0.0, relativeCellSize.y)).rgb;

        vec3 newEl = vec3(
            // d_Y Z - d_Z Y, but d_Z = 0 in 2d
            alphaBeta.x * el.x + alphaBeta.y * (mag.z - magYN.z),

            // d_Z X - d_X Z, but d_Z = 0 in 2d
            alphaBeta.x * el.y + alphaBeta.y * (magXN.z - mag.z),

            // d_X Y - d_Y X
            alphaBeta.x * el.z + alphaBeta.y * ((mag.y - magXN.y) - (mag.x - magYN.x))
        );

        gl_FragColor = vec4(newEl, 0.0);
    }
`;
const updateMagnetic = `
    precision highp float;

    uniform sampler2D electricField;
    uniform sampler2D magneticField;
    uniform sampler2D alphaBetaField;
    uniform vec2 relativeCellSize;
    uniform bool reflectiveBoundary;

    varying vec2 uv;

    void main() {
        if (!reflectiveBoundary) {
            vec2 b = 2.0 * relativeCellSize;

            float xAtMinBound = uv.x < b.x ? relativeCellSize.x : 0.0;
            float xAtMaxBound = uv.x + b.x >= 1.0 ? -relativeCellSize.x : 0.0;
            float yAtMinBound = uv.y < b.y ? relativeCellSize.y : 0.0;
            float yAtMaxBound = uv.y + b.y >= 1.0 ? -relativeCellSize.y : 0.0;

            if (xAtMinBound != 0.0 || xAtMaxBound != 0.0 || yAtMinBound != 0.0 || yAtMaxBound != 0.0) {
                gl_FragColor = texture2D(magneticField, vec2(
                    uv.x + xAtMinBound + xAtMaxBound,
                    uv.y + yAtMinBound + yAtMaxBound
                ));
                return;
            }
        }

        vec2 alphaBeta = texture2D(alphaBetaField, uv).ba;

        vec3 mag = texture2D(magneticField, uv).rgb;
        vec3 el = texture2D(electricField, uv).rgb;
        vec3 elXP = texture2D(electricField, uv + vec2(relativeCellSize.x, 0.0)).rgb;
        vec3 elYP = texture2D(electricField, uv + vec2(0.0, relativeCellSize.y)).rgb;

        vec3 newMag = vec3(
            // d_Y Z - d_Z Y, but d_Z = 0 in 2d
            alphaBeta.x * mag.x - alphaBeta.y * (elYP.z - el.z),

            // d_Z X - d_X Z, but d_Z = 0 in 2d
            alphaBeta.x * mag.y - alphaBeta.y * (el.z - elXP.z),

            // d_X Y - d_Y X
            alphaBeta.x * mag.z - alphaBeta.y * ((elXP.y - el.y) - (elYP.x - el.x))
        );

        gl_FragColor = vec4(newMag, 0.0);
    }
`;
const injectSource = `
    precision highp float;

    uniform sampler2D sourceField;
    uniform sampler2D field;
    uniform float dt;

    varying vec2 uv;

    void main() {
        vec4 source = texture2D(sourceField, uv);
        vec4 field = texture2D(field, uv);

        gl_FragColor = field + dt * source;
    }
`;
const decaySource = `
    precision highp float;

    uniform sampler2D sourceField;
    uniform float dt;

    varying vec2 uv;

    void main() {
        vec4 source = texture2D(sourceField, uv);
        vec4 decayedSource = source * pow(0.1, dt);

        gl_FragColor = decayedSource;
    }
`;
const drawSquare = `
    precision highp float;

    uniform sampler2D texture;
    uniform vec2 pos;
    uniform vec4 value;
    uniform vec2 size;
    uniform vec4 keep;

    varying vec2 uv;

    void main() {
        vec2 d = abs(pos.xy - uv.xy);
        vec4 oldValue = texture2D(texture, uv);
        bool within = all(lessThanEqual(d, size));

        gl_FragColor = within ? value + keep * oldValue : oldValue;
    }
`;
const drawEllipse = `
    precision highp float;

    uniform sampler2D texture;
    uniform vec2 pos;
    uniform vec4 value;
    uniform vec2 radius;
    uniform vec4 keep;

    varying vec2 uv;

    void main() {
        // Calculate distance squared
        vec2 d = pos.xy - uv.xy;

        // Check if distance is within ellipse
        d = d / radius;
        d = d * d;

        bool within = d.x + d.y <= 1.0;
        
        vec4 oldValue = texture2D(texture, uv);

        gl_FragColor = within ? value + keep * oldValue : oldValue;
    }
`;
const vert = `
    precision highp float;
    attribute vec2 position;
    varying vec2 uv;
    void main() {
        uv = 0.5 * (position + 1.0);
        gl_Position = vec4(position, 0, 1);
    }
`;
const copyUint8ToFloat16 = `
    precision highp float;

    uniform sampler2D texture;

    varying vec2 uv;

    void main() {
        gl_FragColor = (-128.0 + 255.0 * texture2D(texture, uv)) / 4.0;
    }
`;
const copyFloat16ToUint8 = `
    precision highp float;

    uniform sampler2D texture;

    varying vec2 uv;

    void main() {
        gl_FragColor = (128.0 + 4.0 * texture2D(texture, uv)) / 256.0;
    }
`;

/***/ }),

/***/ "./src/em/maps.ts":
/*!************************!*\
  !*** ./src/em/maps.ts ***!
  \************************/
/*! exports provided: empty, doubleSlit, fiberOptics, lens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doubleSlit", function() { return doubleSlit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fiberOptics", function() { return fiberOptics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lens", function() { return lens; });
function empty(simulationSettings) {
  const materialMap = {
    permittivity: [],
    permeability: [],
    conductivity: [],
    shape: simulationSettings.gridSize
  };

  for (let y = 0; y < simulationSettings.gridSize[1]; y++) {
    materialMap.permittivity.push(new Array(simulationSettings.gridSize[0]).fill(1));
    materialMap.permeability.push(new Array(simulationSettings.gridSize[0]).fill(1));
    materialMap.conductivity.push(new Array(simulationSettings.gridSize[0]).fill(0));
  }

  const sourceDescriptors = [];
  return {
    sourceDescriptors: sourceDescriptors,
    simulationSettings: simulationSettings,
    materialMap: materialMap
  };
}
function doubleSlit(simulationSettings) {
  const materialMap = {
    permittivity: [],
    permeability: [],
    conductivity: [],
    shape: simulationSettings.gridSize
  };
  const slitCenterX = Math.round(0.5 * simulationSettings.gridSize[0]);
  const slitSize = 0.2 / simulationSettings.cellSize;

  for (let y = 0; y < simulationSettings.gridSize[1]; y++) {
    const isWallRow = Math.abs(y - simulationSettings.gridSize[1] * 4 / 5) < 2;
    const permittivityRow = new Array(simulationSettings.gridSize[0]).fill(isWallRow ? 100 : 1);

    if (isWallRow) {
      for (let x = slitCenterX - slitSize * 2; x < slitCenterX - slitSize; x++) {
        permittivityRow[x] = 1;
      }

      for (let x = slitCenterX + slitSize * 2; x > slitCenterX + slitSize; x--) {
        permittivityRow[x] = 1;
      }
    }

    materialMap.permittivity.push(permittivityRow);
    materialMap.permeability.push(new Array(simulationSettings.gridSize[0]).fill(1));
    materialMap.conductivity.push(new Array(simulationSettings.gridSize[0]).fill(0));
  }

  const sourceDescriptors = [{
    type: "point",
    amplitude: 30000,
    frequency: 3,
    position: [0.5, 14.5 / 15]
  }];
  return {
    sourceDescriptors: sourceDescriptors,
    simulationSettings: simulationSettings,
    materialMap: materialMap
  };
}
function fiberOptics(simulationSettings) {
  const materialMap = {
    permittivity: [],
    permeability: [],
    conductivity: [],
    shape: simulationSettings.gridSize
  };

  for (let y = 0; y < simulationSettings.gridSize[1]; y++) {
    materialMap.permittivity.push(new Array(simulationSettings.gridSize[0]).fill(1));
    materialMap.permeability.push(new Array(simulationSettings.gridSize[0]).fill(1));
    materialMap.conductivity.push(new Array(simulationSettings.gridSize[0]).fill(0));
  }

  function getCurvePoint(t) {
    return [Math.round(simulationSettings.gridSize[0] * 0.5 + simulationSettings.gridSize[0] / 5 * 0.5 / (2 * t + 1) * -Math.sin(2 * Math.PI * t)), Math.round(simulationSettings.gridSize[1] * (1 / 10 + t * (1 - 2 / 10)))];
  }

  const numPoints = 100;
  const thickness = 0.04 / simulationSettings.cellSize;

  for (let t = 0; t < numPoints; t++) {
    const pos = getCurvePoint(t / numPoints);

    for (let x = -thickness + pos[0]; x < thickness + pos[0]; x++) {
      for (let y = -thickness + pos[1]; y < thickness + pos[1]; y++) {
        if (x >= 0 && y >= 0 && x < simulationSettings.gridSize[0] && y < simulationSettings.gridSize[1]) {
          materialMap.permittivity[y][x] = 2;
        }
      }
    }
  }

  const endPoint = getCurvePoint(1);
  const sourceDescriptors = [{
    type: "point",
    amplitude: 10000,
    frequency: 5,
    position: [(endPoint[0] - 1) / simulationSettings.gridSize[0], 1 - endPoint[1] / simulationSettings.gridSize[1]],
    turnOffTime: 0.5
  }, {
    type: "point",
    amplitude: 10000,
    frequency: 5,
    position: [(endPoint[0] + 2) / simulationSettings.gridSize[0], 1 - endPoint[1] / simulationSettings.gridSize[1]],
    turnOffTime: 0.5
  }];
  return {
    sourceDescriptors: sourceDescriptors,
    simulationSettings: simulationSettings,
    materialMap: materialMap
  };
}
function lens(simulationSettings) {
  const materialMap = {
    permittivity: [],
    permeability: [],
    conductivity: [],
    shape: simulationSettings.gridSize
  };
  const center = [simulationSettings.gridSize[0] * 0.6, simulationSettings.gridSize[1] / 2];

  function isLensPoint(point) {
    const dx = point[0] - center[0];
    const dy = point[1] - center[1];
    return 4 * dx * dx + dy * dy < simulationSettings.gridSize[0] * simulationSettings.gridSize[0] / (10 * 10);
  }

  for (let y = 0; y < simulationSettings.gridSize[1]; y++) {
    materialMap.permittivity.push([]);
    materialMap.permeability.push(new Array(simulationSettings.gridSize[0]).fill(1));
    materialMap.conductivity.push(new Array(simulationSettings.gridSize[0]).fill(0));

    for (let x = 0; x < simulationSettings.gridSize[0]; x++) {
      materialMap.permittivity[y].push(isLensPoint([x, y]) ? 3 : 1);
    }
  }

  const sourceDescriptors = [{
    type: "point",
    amplitude: 60000,
    frequency: 2,
    position: [1 / 10, 1 / 2],
    turnOffTime: 0.5
  }];
  return {
    sourceDescriptors: sourceDescriptors,
    simulationSettings: simulationSettings,
    materialMap: materialMap
  };
}

/***/ }),

/***/ "./src/em/rendering.ts":
/*!*****************************!*\
  !*** ./src/em/rendering.ts ***!
  \*****************************/
/*! exports provided: createReglFromCanvas, makeRenderSimulatorCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReglFromCanvas", function() { return createReglFromCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeRenderSimulatorCanvas", function() { return makeRenderSimulatorCanvas; });
/* harmony import */ var _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernels/rendering */ "./src/em/kernels/rendering.ts");
/* harmony import */ var regl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regl */ "./node_modules/regl/dist/regl.js");
/* harmony import */ var regl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regl__WEBPACK_IMPORTED_MODULE_1__);


function createReglFromCanvas(canvas) {
  return regl__WEBPACK_IMPORTED_MODULE_1___default()({
    canvas: canvas,
    extensions: ["OES_texture_half_float"],
    optionalExtensions: ["OES_texture_half_float_linear", // Shows a warning without this. However making it
    // non-optional would make it crash on iPad 6 even
    // though it works.
    "EXT_color_buffer_half_float"]
  });
}
function makeRenderSimulatorCanvas(regl, canvasSize, gridSize) {
  const filter = regl.hasExtension("OES_texture_half_float_linear") ? "linear" : "nearest";
  const frameBuffers = [];

  const makeFrameBuffer = () => {
    // Create half-precision texture at canvas size
    const fbo = regl.framebuffer({
      color: regl.texture({
        width: canvasSize[0],
        height: canvasSize[1],
        wrap: "clamp",
        type: "float16",
        format: "rgba",
        min: filter,
        mag: filter
      }),
      depthStencil: false
    }); // Keep track of all frame buffers so we can
    // resize them when the canvas size changes.

    frameBuffers.push(fbo);
    return fbo;
  };

  const fbos = [makeFrameBuffer(), makeFrameBuffer()];
  const energyFbo = makeFrameBuffer();
  const backgroundFbo = makeFrameBuffer();
  const renderBackground = regl({
    frag: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["renderBackground"],
    framebuffer: backgroundFbo,
    uniforms: {
      gridSize: (_, {
        gridSize
      }) => gridSize
    },
    attributes: {
      position: [[1, -1], [1, 1], [-1, -1], [-1, 1]]
    },
    vert: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["vertDraw"],
    count: 4,
    primitive: "triangle strip",
    depth: {
      enable: false
    }
  });
  const renderEnergy = regl({
    frag: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["renderEnergy"],
    framebuffer: energyFbo,
    uniforms: {
      brightness: (_, {
        brightness
      }) => brightness,
      electricField: (_, {
        electricField
      }) => electricField,
      magneticField: (_, {
        magneticField
      }) => magneticField,
      material: (_, {
        material
      }) => material,
      electricEnergyFactor: (_, {
        electricEnergyFactor
      }) => electricEnergyFactor,
      magneticEnergyFactor: (_, {
        magneticEnergyFactor
      }) => magneticEnergyFactor
    },
    attributes: {
      position: [[1, -1], [1, 1], [-1, -1], [-1, 1]]
    },
    vert: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["vertDraw"],
    count: 4,
    primitive: "triangle strip",
    depth: {
      enable: false
    }
  });
  const bloomExtract = regl({
    frag: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["bloomExtract"],
    framebuffer: fbos[0],
    uniforms: {
      texture: () => energyFbo,
      threshold: (_, {
        threshold
      }) => threshold
    },
    attributes: {
      position: [[1, -1], [1, 1], [-1, -1], [-1, 1]]
    },
    vert: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["vertDraw"],
    count: 4,
    primitive: "triangle strip",
    depth: {
      enable: false
    }
  });
  const blurVert = regl({
    frag: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["blurDirectional"],
    framebuffer: fbos[1],
    uniforms: {
      texture: (_, {
        texture
      }) => texture,
      direction: ctx => [1 / ctx.drawingBufferHeight, 0]
    },
    attributes: {
      position: [[1, -1], [1, 1], [-1, -1], [-1, 1]]
    },
    vert: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["vertDraw"],
    count: 4,
    primitive: "triangle strip",
    depth: {
      enable: false
    }
  });
  const blurHor = regl({
    frag: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["blurDirectional"],
    framebuffer: fbos[0],
    uniforms: {
      texture: fbos[1],
      direction: ctx => [0, 1 / ctx.drawingBufferHeight]
    },
    attributes: {
      position: [[1, -1], [1, 1], [-1, -1], [-1, 1]]
    },
    vert: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["vertDraw"],
    count: 4,
    primitive: "triangle strip",
    depth: {
      enable: false
    }
  });
  const draw = regl({
    frag: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["draw"],
    uniforms: {
      energyTexture: (_, {
        energyTexture
      }) => energyTexture,
      bloomTexture: (_, {
        bloomTexture
      }) => bloomTexture,
      materialTexture: (_, {
        materialTexture
      }) => materialTexture,
      backgroundTexture: (_, {
        backgroundTexture
      }) => backgroundTexture
    },
    attributes: {
      position: [[1, -1], [1, 1], [-1, -1], [-1, 1]]
    },
    vert: _kernels_rendering__WEBPACK_IMPORTED_MODULE_0__["vertDraw"],
    count: 4,
    primitive: "triangle strip",
    depth: {
      enable: false
    }
  });

  function render(electricField, magneticField, material, cellSize, gridSize, showElectric, showMagnetic) {
    renderEnergy({
      brightness: 0.02 * 0.02 / (cellSize * cellSize),
      electricField: electricField,
      magneticField: magneticField,
      material: material,
      electricEnergyFactor: showElectric ? 1 : 0,
      magneticEnergyFactor: showMagnetic ? 1 : 0
    });
    bloomExtract({
      threshold: 1
    });
    const blurCount = 3;

    for (let i = 0; i < blurCount; i++) {
      blurVert({
        texture: i === 0 ? energyFbo : fbos[0]
      });
      blurHor();
    }

    draw({
      energyTexture: energyFbo,
      bloomTexture: fbos[0],
      materialTexture: material,
      backgroundTexture: backgroundFbo
    });
  }

  renderBackground({
    gridSize: gridSize
  });
  return {
    render: render,
    adjustCanvasSize: size => {
      frameBuffers.forEach(fbo => fbo.resize(size[0], size[1]));
      regl.poll();
    },
    adjustGridSize: gridSize => {
      renderBackground({
        gridSize: gridSize
      });
    }
  };
}

/***/ }),

/***/ "./src/em/serialization.ts":
/*!*********************************!*\
  !*** ./src/em/serialization.ts ***!
  \*********************************/
/*! exports provided: currentSimulatorMapVersion, makeMaterialMap, signalSourceToDescriptor, descriptorToSignalSource, encodeSimulatorMap, decodeSimulatorMap, encodeMaterialMap, decodeMaterialMap_v0, decodeMaterialMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentSimulatorMapVersion", function() { return currentSimulatorMapVersion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMaterialMap", function() { return makeMaterialMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signalSourceToDescriptor", function() { return signalSourceToDescriptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "descriptorToSignalSource", function() { return descriptorToSignalSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeSimulatorMap", function() { return encodeSimulatorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeSimulatorMap", function() { return decodeSimulatorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encodeMaterialMap", function() { return encodeMaterialMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeMaterialMap_v0", function() { return decodeMaterialMap_v0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decodeMaterialMap", function() { return decodeMaterialMap; });
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pako__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sources */ "./src/em/sources.ts");


const currentSimulatorMapVersion = 1;
function makeMaterialMap(material) {
  const permittivity = [];
  const permeability = [];
  const conductivity = [];
  const shape = [material[0].length, material.length];

  for (let y = 0; y < shape[1]; y++) {
    permittivity.push([]);
    permeability.push([]);
    conductivity.push([]);

    for (let x = 0; x < shape[0]; x++) {
      permittivity[y].push(material[y][x][0]);
      permeability[y].push(material[y][x][1]);
      conductivity[y].push(material[y][x][2]);
    }
  }

  return {
    permittivity,
    permeability,
    conductivity,
    shape
  };
}
function signalSourceToDescriptor(source) {
  if (source instanceof _sources__WEBPACK_IMPORTED_MODULE_1__["PointSignalSource"]) {
    return {
      type: "point",
      position: source.position,
      amplitude: source.amplitude,
      frequency: source.frequency,
      turnOffTime: source.turnOffTime
    };
  }

  throw new Error("Unknown source: " + JSON.stringify(source));
}
function descriptorToSignalSource(descriptor) {
  if (descriptor.type === "point") {
    return new _sources__WEBPACK_IMPORTED_MODULE_1__["PointSignalSource"](descriptor.amplitude, descriptor.frequency, descriptor.position, descriptor.turnOffTime);
  }

  throw new Error("Unknown source type: " + descriptor.type);
}
function encodeSimulatorMap(simulatorMap) {
  return {
    simulationSettings: simulatorMap.simulationSettings,
    sourceDescriptors: simulatorMap.sourceDescriptors,
    encodedMaterialMap: encodeMaterialMap(simulatorMap.materialMap),
    version: currentSimulatorMapVersion
  };
}
function decodeSimulatorMap(encodedSimulatorMap) {
  const version = encodedSimulatorMap.version;
  const materialMap = version === undefined ? decodeMaterialMap_v0(encodedSimulatorMap.encodedMaterialMap) : decodeMaterialMap(encodedSimulatorMap.encodedMaterialMap);
  return {
    simulationSettings: encodedSimulatorMap.simulationSettings,
    sourceDescriptors: encodedSimulatorMap.sourceDescriptors,
    materialMap: materialMap
  };
}
function encodeMaterialMap(materialMap) {
  const materialMapArray = new Float32Array(2 + 3 * materialMap.shape[0] * materialMap.shape[1]);
  materialMapArray[0] = materialMap.shape[0];
  materialMapArray[1] = materialMap.shape[1];

  for (let y = 0; y < materialMap.shape[1]; y++) {
    for (let x = 0; x < materialMap.shape[0]; x++) {
      const index = y * materialMap.shape[0] * 3 + x * 3;
      materialMapArray[2 + index] = materialMap.permittivity[y][x];
      materialMapArray[2 + index + 1] = materialMap.permeability[y][x];
      materialMapArray[2 + index + 2] = materialMap.conductivity[y][x];
    }
  }

  const encodedMaterialMap = pako__WEBPACK_IMPORTED_MODULE_0___default.a.deflate(new Uint8Array(materialMapArray.buffer), {
    to: "string"
  });
  return encodedMaterialMap;
}
function decodeMaterialMap_v0(encodedMaterialMap) {
  const materialMapArray = new Float32Array(pako__WEBPACK_IMPORTED_MODULE_0___default.a.inflate(encodedMaterialMap).buffer);
  const shape = [materialMapArray[0], materialMapArray[1]];
  const permittivity = [];
  const permeability = [];
  const conductivity = []; // added later, use default value of 0

  for (let y = 0; y < shape[1]; y++) {
    permittivity.push([]);
    permeability.push([]);
    conductivity.push([]);

    for (let x = 0; x < shape[0]; x++) {
      const index = y * shape[0] * 2 + x * 2;
      permittivity[y].push(materialMapArray[2 + index]);
      permeability[y].push(materialMapArray[2 + index + 1]);
      conductivity[y].push(0);
    }
  }

  return {
    shape: shape,
    permittivity: permittivity,
    permeability: permeability,
    conductivity: conductivity
  };
}
function decodeMaterialMap(encodedMaterialMap) {
  const materialMapArray = new Float32Array(pako__WEBPACK_IMPORTED_MODULE_0___default.a.inflate(encodedMaterialMap).buffer);
  const shape = [materialMapArray[0], materialMapArray[1]];
  const permittivity = [];
  const permeability = [];
  const conductivity = [];

  for (let y = 0; y < shape[1]; y++) {
    permittivity.push([]);
    permeability.push([]);
    conductivity.push([]);

    for (let x = 0; x < shape[0]; x++) {
      const index = y * shape[0] * 3 + x * 3;
      permittivity[y].push(materialMapArray[2 + index]);
      permeability[y].push(materialMapArray[2 + index + 1]);
      conductivity[y].push(materialMapArray[2 + index + 2]);
    }
  }

  return {
    shape: shape,
    permittivity: permittivity,
    permeability: permeability,
    conductivity: conductivity
  };
}

/***/ }),

/***/ "./src/em/simulator.ts":
/*!*****************************!*\
  !*** ./src/em/simulator.ts ***!
  \*****************************/
/*! exports provided: combineMaterialMaps, FDTDSimulator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineMaterialMaps", function() { return combineMaterialMaps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FDTDSimulator", function() { return FDTDSimulator; });
/* harmony import */ var _kernels_simulation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kernels/simulation */ "./src/em/kernels/simulation.ts");
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawing */ "./src/em/drawing.ts");



function clamp(min, max, value) {
  return Math.max(min, Math.min(max, value));
}

function snapToGrid(relativePoint, gridSize) {
  const relativeCellSize = [1 / gridSize[0], 1 / gridSize[1]];
  const residual = [relativePoint[0] % relativeCellSize[0], relativePoint[1] % relativeCellSize[1]];
  const gridPoint = [relativePoint[0] - residual[0] + 0.5 * relativeCellSize[0], relativePoint[1] - residual[1] + 0.5 * relativeCellSize[1]];
  return gridPoint;
}

function combineMaterialMaps(permittivity, permeability, conductivity) {
  const material = [];
  const width = permittivity[0].length;
  const height = permittivity.length; // TODO: Verify same dims

  for (let y = 0; y < height; y++) {
    const row = [];

    for (let x = 0; x < width; x++) {
      row.push([clamp(0, 255, 128 + 4 * permittivity[y][x]), clamp(0, 255, 128 + 4 * permeability[y][x]), clamp(0, 255, 128 + 4 * conductivity[y][x])]);
    }

    material.push(row);
  }

  return material;
}

class DoubleFramebuffer2D {
  constructor(current, previous) {
    this.current = void 0;
    this.previous = void 0;
    this.current = current;
    this.previous = previous;
  }

  swap() {
    const oldCurrent = this.current;
    this.current = this.previous;
    this.previous = oldCurrent;
  }

}

class FDTDSimulator {
  // dt that the alpha beta values were calculated for
  constructor(regl, gridSize, cellSize, reflectiveBoundary, dt) {
    this.regl = regl;
    this.gridSize = gridSize;
    this.cellSize = cellSize;
    this.reflectiveBoundary = reflectiveBoundary;
    this.dt = dt;
    this.data = void 0;
    this.updateMagnetic = void 0;
    this.updateElectric = void 0;
    this.updateAlphaBeta = void 0;
    this.injectSource = void 0;
    this.decaySource = void 0;
    this.drawOnTexture = void 0;
    this.copyUint8ToFloat16 = void 0;
    this.copyFloat16ToUint8 = void 0;
    this.frameBuffers = void 0;
    this.alphaBetaDt = void 0;

    this.getGridSize = () => this.gridSize;

    this.setGridSize = gridSize => {
      this.gridSize = gridSize;
      this.frameBuffers.forEach(frameBuffer => frameBuffer.resize(gridSize[0], gridSize[1])); // TODO: Copy old data ?

      this.resetFields();
    };

    this.getCellSize = () => this.cellSize;

    this.setCellSize = cellSize => {
      this.cellSize = cellSize;
      this.resetFields();
    };

    this.getReflectiveBoundary = () => this.reflectiveBoundary;

    this.setReflectiveBoundary = reflectiveBoundary => {
      this.reflectiveBoundary = reflectiveBoundary;
    };

    this.stepElectric = dt => {
      if (this.alphaBetaDt !== dt) {
        this.updateAlphaBetaFromMaterial(dt);
      }

      this.data.electricField.swap();
      this.data.electricSourceField.swap(); // Writes to E current

      this.injectSource({
        sourceField: this.data.electricSourceField.previous,
        field: this.data.electricField.previous,
        dt: dt
      });
      this.data.electricField.swap(); // Writes to S current

      this.decaySource({
        sourceField: this.data.electricSourceField.previous,
        dt: dt
      }); // Writes to E current

      this.updateElectric({
        electricField: this.data.electricField.previous,
        magneticField: this.data.magneticField.current,
        alphaBetaField: this.data.alphaBetaField,
        relativeCellSize: [1 / this.gridSize[0], 1 / this.gridSize[1]],
        reflectiveBoundary: this.reflectiveBoundary
      });
      this.data.time += dt / 2;
    };

    this.stepMagnetic = dt => {
      if (this.alphaBetaDt !== dt) {
        this.updateAlphaBetaFromMaterial(dt);
      }

      this.data.magneticField.swap();
      this.updateMagnetic({
        electricField: this.data.electricField.current,
        magneticField: this.data.magneticField.previous,
        alphaBetaField: this.data.alphaBetaField,
        relativeCellSize: [1 / this.gridSize[0], 1 / this.gridSize[1]],
        reflectiveBoundary: this.reflectiveBoundary
      });
      this.data.time += dt / 2;
    };

    this.resetFields = () => {
      this.data.time = 0;
      this.regl.clear({
        color: [0, 0, 0, 0],
        framebuffer: this.data.electricField.current
      });
      this.regl.clear({
        color: [0, 0, 0, 0],
        framebuffer: this.data.magneticField.current
      });
      this.regl.clear({
        color: [0, 0, 0, 0],
        framebuffer: this.data.electricSourceField.current
      });
    };

    this.resetMaterials = () => {
      this.regl.clear({
        color: [1, 1, 0, 0],
        framebuffer: this.data.material.current
      });
      this.updateAlphaBetaFromMaterial(this.alphaBetaDt);
    };

    this.drawMaterial = (materialType, drawInfo) => {
      this.data.material.swap();
      const value = [0, 0, 0, 0];
      const keep = [1, 1, 1, 1];

      if (materialType === "permittivity") {
        value[0] = drawInfo.value;
        keep[0] = 0;
      } else if (materialType === "permeability") {
        value[1] = drawInfo.value;
        keep[1] = 0;
      } else if (materialType === "conductivity") {
        value[2] = drawInfo.value;
        keep[2] = 0;
      }

      const uniforms = {
        pos: snapToGrid(drawInfo.center, this.gridSize),
        value: value,
        keep: keep,
        texture: this.data.material.previous,
        fbo: this.data.material.current
      };

      if (drawInfo.drawShape === _drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Ellipse) {
        uniforms.radius = drawInfo.radius;
      } else if (drawInfo.drawShape === _drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square) {
        uniforms.size = drawInfo.halfSize;
      }

      this.drawOnTexture[drawInfo.drawShape](uniforms);
      this.updateAlphaBetaFromMaterial(this.alphaBetaDt);
    };

    this.injectSignal = (drawInfo, dt) => {
      this.data.electricSourceField.swap();
      const uniforms = {
        pos: snapToGrid(drawInfo.center, this.gridSize),
        value: [0, 0, drawInfo.value * dt, 0],
        keep: [1, 1, 1, 1],
        texture: this.data.electricSourceField.previous,
        fbo: this.data.electricSourceField.current
      };

      if (drawInfo.drawShape === _drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Ellipse) {
        uniforms.radius = drawInfo.radius;
      } else if (drawInfo.drawShape === _drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square) {
        uniforms.size = drawInfo.halfSize;
      }

      this.drawOnTexture[drawInfo.drawShape](uniforms);
    };

    this.loadMaterial = material => {
      const materialTexture = this.regl.texture({
        data: material,
        format: "rgb",
        type: "uint8",
        min: "nearest",
        mag: "nearest"
      });
      this.copyUint8ToFloat16({
        texture: materialTexture
      });
      materialTexture.destroy();
      this.updateAlphaBetaFromMaterial(this.alphaBetaDt);
    };

    this.loadMaterialFromComponents = (permittivity, permeability, conductivity) => {
      this.loadMaterial(combineMaterialMaps(permittivity, permeability, conductivity));
    };

    this.getData = () => this.data;

    this.getMaterial = () => {
      const fbo = this.regl.framebuffer({
        color: this.regl.texture({
          width: this.gridSize[0],
          height: this.gridSize[1],
          wrap: "clamp",
          type: "uint8",
          format: "rgba",
          min: "nearest",
          mag: "nearest"
        }),
        depthStencil: false
      });
      this.copyFloat16ToUint8({
        fbo: fbo,
        texture: this.data.material.current
      });
      const materialData = this.regl.read({
        framebuffer: fbo
      });
      fbo.destroy(); // Uint8 to float with correct scaling

      const materialFloats = [];

      for (let y = 0; y < this.gridSize[1]; y++) {
        const row = [];

        for (let x = 0; x < this.gridSize[0]; x++) {
          row.push([(materialData[y * this.gridSize[0] * 4 + x * 4 + 0] - 127) / 4, (materialData[y * this.gridSize[0] * 4 + x * 4 + 1] - 127) / 4, (materialData[y * this.gridSize[0] * 4 + x * 4 + 2] - 127) / 4 // +3 is unused
          ]);
        }

        materialFloats.push(row);
      }

      return materialFloats;
    };

    this.alphaBetaDt = dt;
    this.frameBuffers = [];

    const makeFrameBuffer = () => {
      // Create half-precision texture at grid size
      const fbo = regl.framebuffer({
        color: regl.texture({
          width: gridSize[0],
          height: gridSize[1],
          wrap: "clamp",
          type: "float16",
          format: "rgba",
          min: "nearest",
          mag: "nearest"
        }),
        depthStencil: false
      }); // Keep track of all fbos so we can resize them
      // together if the grid size changes.

      this.frameBuffers.push(fbo);
      return fbo;
    };

    const makeField = () => {
      return new DoubleFramebuffer2D(makeFrameBuffer(), makeFrameBuffer());
    };

    this.data = {
      time: 0,
      electricField: makeField(),
      magneticField: makeField(),
      electricSourceField: makeField(),
      material: makeField(),
      alphaBetaField: makeFrameBuffer()
    };

    const makeFragFn = (frag, fbos, uniforms) => {
      return regl({
        frag: frag,
        framebuffer: () => fbos.current,
        uniforms: uniforms,
        attributes: {
          position: [[1, -1], [1, 1], [-1, -1], [-1, 1]]
        },
        vert: _kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["vert"],
        count: 4,
        primitive: "triangle strip",
        depth: {
          enable: false
        }
      });
    };

    const makeFragWithFboPropFn = (frag, uniforms) => {
      return regl({
        frag: frag,
        framebuffer: (_, prop) => prop.fbo,
        uniforms: uniforms,
        attributes: {
          position: [[1, -1], [1, 1], [-1, -1], [-1, 1]]
        },
        vert: _kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["vert"],
        count: 4,
        primitive: "triangle strip",
        depth: {
          enable: false
        }
      });
    };

    this.updateAlphaBeta = makeFragFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["updateAlphaBeta"], {
      current: this.data.alphaBetaField
    }, {
      dt: (_, props) => props.dt,
      cellSize: (_, props) => props.cellSize,
      material: (_, props) => props.material
    });
    this.updateElectric = makeFragFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["updateElectric"], this.data.electricField, {
      electricField: (_, props) => props.electricField,
      magneticField: (_, props) => props.magneticField,
      alphaBetaField: (_, props) => props.alphaBetaField,
      relativeCellSize: (_, props) => props.relativeCellSize,
      reflectiveBoundary: (_, props) => props.reflectiveBoundary
    });
    this.updateMagnetic = makeFragFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["updateMagnetic"], this.data.magneticField, {
      electricField: (_, props) => props.electricField,
      magneticField: (_, props) => props.magneticField,
      alphaBetaField: (_, props) => props.alphaBetaField,
      relativeCellSize: (_, props) => props.relativeCellSize,
      reflectiveBoundary: (_, props) => props.reflectiveBoundary
    });
    this.injectSource = makeFragFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["injectSource"], this.data.electricField, {
      sourceField: (_, props) => props.sourceField,
      field: (_, props) => props.field,
      dt: (_, props) => props.dt
    });
    this.decaySource = makeFragFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["decaySource"], this.data.electricSourceField, {
      sourceField: (_, props) => props.sourceField,
      dt: (_, props) => props.dt
    });
    this.drawOnTexture = {
      [_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Ellipse]: makeFragWithFboPropFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["drawEllipse"], {
        texture: (_, props) => props.texture,
        pos: (_, props) => props.pos,
        value: (_, props) => props.value,
        radius: (_, props) => props.radius,
        keep: (_, props) => props.keep
      }),
      [_drawing__WEBPACK_IMPORTED_MODULE_1__["DrawShape"].Square]: makeFragWithFboPropFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["drawSquare"], {
        texture: (_, props) => props.texture,
        pos: (_, props) => props.pos,
        value: (_, props) => props.value,
        size: (_, props) => props.size,
        keep: (_, props) => props.keep
      })
    };
    this.copyUint8ToFloat16 = makeFragFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["copyUint8ToFloat16"], this.data.material, {
      texture: (_, props) => props.texture
    });
    this.copyFloat16ToUint8 = makeFragWithFboPropFn(_kernels_simulation__WEBPACK_IMPORTED_MODULE_0__["copyFloat16ToUint8"], {
      texture: (_, props) => props.texture
    });
    this.resetFields();
    this.resetMaterials();
  }

  updateAlphaBetaFromMaterial(dt) {
    this.alphaBetaDt = dt;
    this.updateAlphaBeta({
      material: this.data.material.current,
      dt: dt,
      cellSize: this.cellSize
    });
  }

}

/***/ }),

/***/ "./src/em/sources.ts":
/*!***************************!*\
  !*** ./src/em/sources.ts ***!
  \***************************/
/*! exports provided: PointSignalSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointSignalSource", function() { return PointSignalSource; });
/* harmony import */ var _drawing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing */ "./src/em/drawing.ts");

class PointSignalSource {
  constructor(amplitude, frequency, position, turnOffTime) {
    this.amplitude = amplitude;
    this.frequency = frequency;
    this.position = position;
    this.turnOffTime = turnOffTime;

    this.inject = (simulator, dt) => {
      const t = simulator.getData().time;

      if (t >= 0 && (this.turnOffTime === undefined || t <= this.turnOffTime)) {
        const gridSize = simulator.getGridSize();
        const amplitude = -this.amplitude * Math.cos(2 * Math.PI * this.frequency * t);
        const drawInfo = Object(_drawing__WEBPACK_IMPORTED_MODULE_0__["makeDrawSquareInfo"])(this.position, [0.5 / gridSize[0], 0.5 / gridSize[1]], amplitude);
        simulator.injectSignal(drawInfo, dt);
      }
    };
  }

}

/***/ }),

/***/ "./src/icons/examples.png":
/*!********************************!*\
  !*** ./src/icons/examples.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAABpElEQVR4nO3aMU4CURRG4f9Zw26MtdYa41a0McQ96FpQd+FujP21IBQSkYQ43COeryKhuG848zIzZBJJkiT9vrH+UFXVuZD/bowxkuSkeyH6yiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEEmSjsTY9oXv+k5r/S7vJu+yYAwCYxAYg8AYBIYQZJnkPMlsNEkyS3KR5Lnzh/hRHcZ993FuqqrFIQ582/zO55DlGONm4hl7qaqXJFdTziA+hzw1zt7lsWtw5w6ZjzE+Jp6xl6qaJ3mfcgZxh5BtPVGn1hnktHH2Lm1r6wxy2zh7l7uuwZ1Brqtq0Tj/W1X1kOSyaz7h7/fXrO5q3rou8lU1S3KW1c44SIxtF3VCkH/Ju6w/wiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEFgDAJjEBiDwBgExiAwBoExCIxBYAwCYxAYg8AYBMYgMAaBMQiMQWAMAmMQGIPAGATGIDAGgTEIjEEkSToSn6mWBDoPoverAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/icons/fullscreen.png":
/*!**********************************!*\
  !*** ./src/icons/fullscreen.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACnklEQVR4nO3dy2oUQRjF8fOZmIUXXLoX1EWMAVGCPpQrH0NXrn0FFxEhKiEg6gvoyoVrsxHHGcjFy3HREwRJhnSnqvvL5P+DWTV8VV1nanrRNVUSAAAAAAAAMKdc38j2uu3livdw2/Zr27u1b6Zt36LDzbRupKOJpAcR8bFkUdv3JL2TtFSy7lEiotUYn6vVkQIuSXpcoe4z9RRGF5lniCTtS7oQEb9LFLN9VdLXErWOa55myJmUPZCtUrNDkiJiW9KnUvVqyBzIRNKjCnUfStqpULeIjIGMJK1LWouI4t/miNiStCZpU9Ju6fonVfyh3vYhdtqVHo+MM+RMI5BkCCQZAkmGQJIhkGQIJBkCSYZAkiGQZAgkGQJJhkCSIZBkCCSZLoGMZlz73rUjp9j2jGvjtsW6BPK247V59X7Gtc3qrdtetj0+ZJHeuOZqw6xsX7f944jxuNZXJ1Zsv7K9b3vP9obtW700npDtm7Y3p+Px0/Yb26tDdGTB9kLvDSdle8n24tD9AAAAAAAAAAAAAAAA/7G9yCKHfwYbD9s3pktdfk0/wyx7SWLQ8bC9OmOh3EovnUhk8PGw/fKQxg+8qN6BZEqPR5fNZyaSLh5xeRIRl9vWPM1Kjwe7AZ1Q6fHg/yHJEEgyBJIMgSRDIMkQSDIEkgyBJEMgyRBIMgSSDIEkQyDJEEgyBJJM8UBmvD07rrHt5664T4ib/VrW3ZwIdyKl+5b5DKqRpDsR8aVkUTfvuT+oOXSsunl6QXVF0tMKdZ+opzC6yDxDJGlPzSltf0oUc7NmakfS+RL1jmOeZsiBPr8Ag8seyEZEFAtkeuLbVql6NWT+yfom6X5EfC5ZlId6exM1p7TdLR2GJE3P1l2btjFrQ08AAAAAAHDm/QVKIvrt1bqvIwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/icons/github.png":
/*!******************************!*\
  !*** ./src/icons/github.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/icons/index.ts":
/*!****************************!*\
  !*** ./src/icons/index.ts ***!
  \****************************/
/*! exports provided: Fullscreen, GitHub, Settings, Share, Info, Examples, MaterialBrush, SignalBrush, ResetMaterials, ResetFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fullscreen_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fullscreen.png */ "./src/icons/fullscreen.png");
/* harmony import */ var _fullscreen_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fullscreen_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Fullscreen", function() { return _fullscreen_png__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./github.png */ "./src/icons/github.png");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_github_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "GitHub", function() { return _github_png__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony import */ var _settings_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.png */ "./src/icons/settings.png");
/* harmony import */ var _settings_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_settings_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Settings", function() { return _settings_png__WEBPACK_IMPORTED_MODULE_2___default.a; });
/* harmony import */ var _share_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./share.png */ "./src/icons/share.png");
/* harmony import */ var _share_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_share_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Share", function() { return _share_png__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _info_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./info.png */ "./src/icons/info.png");
/* harmony import */ var _info_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_info_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Info", function() { return _info_png__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _examples_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./examples.png */ "./src/icons/examples.png");
/* harmony import */ var _examples_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_examples_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Examples", function() { return _examples_png__WEBPACK_IMPORTED_MODULE_5___default.a; });
/* harmony import */ var _materialbrush_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./materialbrush.png */ "./src/icons/materialbrush.png");
/* harmony import */ var _materialbrush_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_materialbrush_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "MaterialBrush", function() { return _materialbrush_png__WEBPACK_IMPORTED_MODULE_6___default.a; });
/* harmony import */ var _signalbrush_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signalbrush.png */ "./src/icons/signalbrush.png");
/* harmony import */ var _signalbrush_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_signalbrush_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "SignalBrush", function() { return _signalbrush_png__WEBPACK_IMPORTED_MODULE_7___default.a; });
/* harmony import */ var _resetmaterials_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./resetmaterials.png */ "./src/icons/resetmaterials.png");
/* harmony import */ var _resetmaterials_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_resetmaterials_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ResetMaterials", function() { return _resetmaterials_png__WEBPACK_IMPORTED_MODULE_8___default.a; });
/* harmony import */ var _resetfields_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./resetfields.png */ "./src/icons/resetfields.png");
/* harmony import */ var _resetfields_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_resetfields_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ResetFields", function() { return _resetfields_png__WEBPACK_IMPORTED_MODULE_9___default.a; });











/***/ }),

/***/ "./src/icons/info.png":
/*!****************************!*\
  !*** ./src/icons/info.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/icons/materialbrush.png":
/*!*************************************!*\
  !*** ./src/icons/materialbrush.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAABQ0lEQVR4nO3csW0bQRBA0VlXITfmMuRaVIcLI7s4RwQkmKIS+vh1fC/dYAb4yQF72BkAAIB9rc8Otm37NTNvM/OyyyJrfdhl27btSPPeOc/M61rrz7XDW0FOs1OMmacKMjNzXmv9vHZwK8ieCz5bkH/mX/zYcwm+JkiMIDGCxAgSI0iMIDGCxAgSI0iMIDGCxAgSI0iMIABwEHe/Uz/63fi95rlT/yYEiREkRpAYQWIEiREkRpAYQWIEiREkRpAYQWIEiREkRpAYQQDgILzksNO8r+Zf+MqKESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgSJESRGkBhBYgQBgIPw1smD5vnr5JsQJEaQGEFiBIkRJEaQGEFiBIkRJEaQGEFiBIkRJEaQmFtBzrtt8XxOnx3cCvI6ovwPp5n5/eglAAAALv4CjtFYBjakwqUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/icons/resetfields.png":
/*!***********************************!*\
  !*** ./src/icons/resetfields.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/icons/resetmaterials.png":
/*!**************************************!*\
  !*** ./src/icons/resetmaterials.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/icons/settings.png":
/*!********************************!*\
  !*** ./src/icons/settings.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/icons/share.png":
/*!*****************************!*\
  !*** ./src/icons/share.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/icons/signalbrush.png":
/*!***********************************!*\
  !*** ./src/icons/signalbrush.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.tsx");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.ts");
var _jsxFileName = "C:\\Users\\Admin\\Desktop\\sim\\maxwell-simulation\\src\\index.tsx";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.ts":
/*!******************************!*\
  !*** ./src/serviceWorker.ts ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/share.ts":
/*!**********************!*\
  !*** ./src/share.ts ***!
  \**********************/
/*! exports provided: getSharedSimulatorMap, shareSimulatorMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSharedSimulatorMap", function() { return getSharedSimulatorMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shareSimulatorMap", function() { return shareSimulatorMap; });
/* harmony import */ var _em_serialization__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./em/serialization */ "./src/em/serialization.ts");

const apiUrl = "https://6xuthl3lv4.execute-api.us-east-1.amazonaws.com/live/share";
async function getSharedSimulatorMap(shareId) {
  const response = await fetch(`${apiUrl}?shareId=${shareId}`);

  if (response.ok) {
    const responseText = await response.text();

    if (responseText) {
      const encodedSimulatorMap = JSON.parse(responseText);
      return Object(_em_serialization__WEBPACK_IMPORTED_MODULE_0__["decodeSimulatorMap"])(encodedSimulatorMap);
    }
  }

  throw new Error("Invalid share");
}
async function shareSimulatorMap(simulatorMap) {
  const encodedSimulatorMap = Object(_em_serialization__WEBPACK_IMPORTED_MODULE_0__["encodeSimulatorMap"])(simulatorMap);
  const response = await fetch(apiUrl, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      encodedSimulatorMap: JSON.stringify(encodedSimulatorMap)
    })
  });

  if (response.ok) {
    const responseObject = await response.json();

    if (responseObject && responseObject.body) {
      const {
        shareId
      } = JSON.parse(responseObject.body);

      if (shareId) {
        return shareId;
      }
    }
  }

  throw new Error("Failed share upload");
}

/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/*! exports provided: toggleFullScreen, clamp, qualityPresets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleFullScreen", function() { return toggleFullScreen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "qualityPresets", function() { return qualityPresets; });
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
function clamp(min, max, value) {
  return Math.max(min, Math.min(max, value));
}
const qualityPresets = {
  "Low": {
    dt: 0.013 * 2,
    cellSize: 0.02 * 2,
    resolutionScale: 0.3,
    gridSizeLongest: 400 / 2
  },
  "Medium": {
    dt: 0.013,
    cellSize: 0.02,
    resolutionScale: 1,
    gridSizeLongest: 400
  },
  "High": {
    dt: 0.013 / 2,
    cellSize: 0.02 / 2,
    resolutionScale: 1,
    gridSizeLongest: 400 * 2
  },
  "Ultra": {
    dt: 0.013 / 4,
    cellSize: 0.02 / 4,
    resolutionScale: 1,
    gridSizeLongest: 400 * 4
  }
};

/***/ }),

/***/ 1:
/*!***************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.tsx ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Admin\Desktop\sim\maxwell-simulation\node_modules\webpack\hot\dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! C:\Users\Admin\Desktop\sim\maxwell-simulation\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\Users\Admin\Desktop\sim\maxwell-simulation\src\index.tsx */"./src/index.tsx");


/***/ })

},[[1,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map