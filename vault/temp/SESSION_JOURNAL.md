# SESSION_JOURNAL.md (rotated - earlier entries trimmed)

 at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.036Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.036Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.036Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.036Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.036Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.037Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.037Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.037Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.037Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.037Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.037Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.037Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.038Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.038Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.038Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.038Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.038Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.038Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.038Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.038Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.038Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.038Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.039Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.039Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.039Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.039Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.039Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.039Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.039Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.039Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.039Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.039Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.039Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.039Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.039Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.040Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.040Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.040Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.040Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.040Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.040Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.040Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.040Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.040Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.040Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.040Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.040Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.040Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.041Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.041Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.042Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.042Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.042Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.042Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.042Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.043Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.043Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.043Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.043Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.043Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.043Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.043Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.043Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.043Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.043Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.044Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.044Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.044Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.044Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.044Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.044Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.044Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.044Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.044Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.045Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.045Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.045Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.045Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.045Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.045Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.045Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.046Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.046Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.046Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.046Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.046Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.046Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.046Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.047Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.047Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.047Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.047Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.047Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.047Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.047Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.048Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.048Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.048Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.048Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.048Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.049Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.049Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.049Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.049Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.050Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.050Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.050Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.050Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.050Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.050Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.050Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.051Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.051Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.051Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.051Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.051Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.051Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.051Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.051Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.052Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.052Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.052Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.052Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.052Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.052Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.052Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.052Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.052Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.052Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.052Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.052Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.052Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.052Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.053Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.053Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.053Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.053Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.053Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.053Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.053Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.054Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.054Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.054Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.054Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.054Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.055Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.055Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.055Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.055Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.055Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.056Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.057Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.057Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.057Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.057Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.057Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.057Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.058Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.058Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.058Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.058Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.058Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.059Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.059Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.059Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.059Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.059Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.059Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.059Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.060Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.061Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.061Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.061Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.061Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.061Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.061Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.061Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.062Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.062Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.062Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.062Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.062Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.062Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.062Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.063Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.063Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.063Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.063Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.063Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.063Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.063Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.064Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.064Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.064Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.064Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.064Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.064Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.064Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.064Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.065Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.066Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.066Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.066Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.066Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.066Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.066Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.066Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.067Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.067Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.067Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.067Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.067Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.067Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.067Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.067Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.068Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.068Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.068Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.068Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.068Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.068Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.068Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.069Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.069Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.069Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.069Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.069Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.069Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.070Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.070Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.070Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.070Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.070Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.070Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.071Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.071Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.071Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.071Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.071Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.071Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.071Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.072Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.072Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.072Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:30.072Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:30.072Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.877Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.877Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.877Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.877Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.877Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.877Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.877Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.877Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.877Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.878Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.878Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.878Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.878Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.878Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.878Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.878Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.878Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.878Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.878Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.878Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.879Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.879Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.879Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.879Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.879Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.879Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.879Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.879Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.879Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.879Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.879Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.880Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.880Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.880Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.880Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.880Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.880Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.880Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.880Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.880Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.881Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.881Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.881Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.881Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:48:29.882Z console.error
- text: 
    The above error occurred in the <ProductCard> component:
    
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171308355:62:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App
    
    React will try to recreate this component tree from scratch using the error boundary you provided, ErrorBoundary.

## 2026-09-23 13:48:29.882Z console.error
- text: 
    [ErrorBoundary] render error ReferenceError: cdnImage is not defined
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:52:150)
        at renderWithHooks (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:11596:26)
        at mountIndeterminateComponent (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:14974:21)
        at beginWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:15962:22)
        at beginWork$1 (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19806:22)
        at performUnitOfWork (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19251:20)
        at workLoopSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19190:13)
        at renderRootSync (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:19169:15)
        at recoverFromConcurrentError (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18786:28)
        at performConcurrentWorkOnRoot (http://localhost:3000/node_modules/.vite/deps/chunk-OGKD6Q5V.js?v=43e6b482:18734:30) {"componentStack":"\n    at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790171308355:22:3)\n    at div\n    at div\n    at section\n    at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790171308355:31:43)\n    at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)\n    at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)\n    at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)\n    at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)\n    at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)\n    at EcommerceCartProvider (http://localhost:3000/src/components/b...

## 2026-09-23 13:51:32.473Z load
- url: http://localhost:3000/shop
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 13:51:32.489Z load
- url: http://localhost:3000/shop
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 13:55:07.329Z load
- url: http://localhost:3000/shop
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 13:55:07.347Z load
- url: http://localhost:3000/shop
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 13:58:25.238Z click
- element: {"tag":"a","role":null,"ariaLabel":"Supreme AC Works — home","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-23 13:58:25.239Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-23 13:58:34.856Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"View all products "}

## 2026-09-23 13:58:34.857Z navigate
- url: http://localhost:3000/shop
- via: pushState

## 2026-09-23 13:58:44.281Z click
- element: {"tag":"section","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"All ProductsRefrigerant GasesCopper Pipes & CoilsAC CompressorsAC MotorsInsulationWires & ElectricalAC StandsPCB & ElectronicsInstallation MaterialAC Tools & AccessoriesRelevancePrice: Low to HighPrice: High to LowName A–Z274 productsAC Tools & AccessoriesRefrigerant Charging Hose Set₹799.00 Add to Cart EnquirePCB & ElectronicsVALUE HVAC Manifold Valve₹1650.00 Add to Cart EnquireAC Tools & AccessoriesRefrigerant Charging Valve with Hook₹1200.00 Add to Cart EnquireInstallation MaterialBlue PVC Water Pipe₹199.00 Add to Cart EnquirePCB & ElectronicsHigh-Pressure Washer Spray Gun₹1799.00 Add to Cart EnquireWires & ElectricalMagnetic Contactor₹1250.00 Add to Cart EnquireWires & ElectricalCJX2 1810 AC Contactor₹850.00 Add to Cart EnquireWires & ElectricalMagnetic Contactor CLX-25LF2₹950.00 Add to Cart EnquireCopper Pipes & CoilsCT-807 Eccentric Cone Type Flaring Tool Set₹1850.00 Add to Cart EnquireCopper Pipes & CoilsFlaring Tools for Expanding Tube Set₹1900.00 Add to Cart EnquireAC Tools & AccessoriesDigital Vacuum Gauge Kit₹4200.00 Add to Cart EnquireCopper Pipes & CoilsMulti-Color PVC Hose Pipe Set₹799.00 Add to Cart EnquireInsulationCleanAC AC Foam Cleaner and Disinfectant₹295.00 Add to Cart EnquireSlotted Countersunk Head Screw₹50.00 Add to Cart EnquireWires & ElectricalRaxon 2-Pole 20A Contactor (220V)₹950.00 Add to Cart EnquireInsulationPU Foam Insulation Sealant₹430.00 Add to Cart EnquireRefrigerant GasesReftron R32 Refrigerant Gas Canister₹800.00 Add to Cart EnquireAC MotorsYZF5-13/5W Electric Fan Motor₹950.00 Add to Cart EnquireAC MotorsElectric Fan Motor₹950.00 Add to Cart EnquireAC MotorsAC Fan Motor 83A 230SAC-10₹1850.00 Add to Cart EnquireAC MotorsElectric Fan Motor 230V 50/60Hz₹2850.00 Add to Cart EnquireAC MotorsElectric Fan Motor YZF25/16₹1700.00 Add to Cart EnquireAC MotorsElectric Fan Motor YZF40-25₹2800.00 Add to Cart EnquireAC MotorsElectric Fan Motor₹2200.00 Add to Cart EnquireAC MotorsYZF20-10 Electric Fan Motor₹1950.00 Add to Cart EnquireAC MotorsE..."}

## 2026-09-23 13:58:49.223Z load
- url: http://localhost:3000/shop
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 13:58:49.262Z navigate
- url: http://localhost:3000/shop
- via: replaceState

## 2026-09-23 13:58:57.106Z click
- element: {"tag":"a","role":null,"ariaLabel":"Supreme AC Works — home","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-23 13:58:57.107Z navigate
- url: http://localhost:3000/
- via: pushState

## 2026-09-23 14:04:35.019Z load
- url: http://localhost:3000/shop
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 14:04:35.019Z load
- url: http://localhost:3000/
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 14:04:35.025Z load
- url: http://localhost:3000/shop
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 14:07:04.862Z load
- url: http://localhost:3000/
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 14:07:07.222Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Categories"}

## 2026-09-23 14:07:07.223Z navigate
- url: http://localhost:3000/categories
- via: pushState

## 2026-09-23 14:07:08.088Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Shop"}

## 2026-09-23 14:07:08.088Z navigate
- url: http://localhost:3000/shop
- via: pushState

## 2026-09-23 14:07:12.953Z console.error
- text: 
    Warning: React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.%s fetchPriority fetchpriority 
        at img
        at a
        at LinkWithRef (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10927:5)
        at article
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790172432819:24:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790172432819:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171404324:63:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App

## 2026-09-23 14:07:14.189Z console.error
- text: 
    Warning: React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.%s fetchPriority fetchpriority 
        at img
        at a
        at LinkWithRef (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10927:5)
        at article
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790172432819:24:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790172432819:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171404324:63:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App

## 2026-09-23 14:07:14.190Z console.error
- text: 
    Warning: React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.%s fetchPriority fetchpriority 
        at img
        at a
        at LinkWithRef (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10927:5)
        at article
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790172432819:24:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790172432819:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171404324:63:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App

## 2026-09-23 14:07:21.257Z console.error
- text: [vite] Failed to reload /src/pages/site/ProductPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-09-23 14:07:21.306Z console.error
- text: [vite] Failed to reload /src/pages/site/ProductPage.jsx. This could be due to syntax errors or importing non-existent modules. (see errors above)

## 2026-09-23 14:07:46.051Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Air Conditioner ODU DC Motor LG 1.5 RP 35B SAW-M47"}

## 2026-09-23 14:13:17.658Z load
- url: http://localhost:3000/shop
- title: Supreme AC Works — AC Spare Parts, Refrigerants & HVAC Materials

## 2026-09-23 14:13:19.045Z console.error
- text: 
    Warning: React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.%s fetchPriority fetchpriority 
        at img
        at a
        at LinkWithRef (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10927:5)
        at article
        at ProductCard (http://localhost:3000/src/components/site/ProductCard.jsx?t=1790172432819:24:3)
        at div
        at div
        at section
        at ShopPage (http://localhost:3000/src/pages/site/ShopPage.jsx?t=1790172737553:31:43)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7572:3)
        at Suspense
        at ErrorBoundary (http://localhost:3000/src/components/ErrorBoundary.jsx:5:5)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=43e6b482:10816:3)
        at EcommerceCartProvider (http://localhost:3000/src/components/builder/blocks/EcommerceCart.jsx?t=1790171404324:63:3)
        at Provider (http://localhost:3000/node_modules/.vite/deps/chunk-47K53FJV.js?v=43e6b482:22:15)
        at TooltipProvider (http://localhost:3000/node_modules/.vite/deps/@radix-ui_react-tooltip.js?v=43e6b482:67:5)
        at App

## 2026-09-23 14:13:19.281Z click
- element: {"tag":"a","role":null,"ariaLabel":"Supreme AC Works — home","name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-23 14:13:19.282Z navigate
- url: http://localhost:3000/
- via: pushState

