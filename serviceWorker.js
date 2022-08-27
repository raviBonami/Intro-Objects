
// Servie worker - 
// it is a script that runs independently in browser background
// on client side, it can intercept its NR and decide what to load
// Mainly handle features like backgorund sync, push notifs, also used for offline first apps
// apps which can work without Network connections

// Its lifecycle is completely sepearted from web pages
// terminated when not in use and restarted when next needed

// Installation - firstly it needs to be installed
// activated - it then needs to be activated, during activation, it can manage and decide what happens to old caches
// after activation - takes control of entire page in its scope, 
// it also gets terminated if nothing is left to fetch

// on very first visit to a webpage, service worker will be installed
// apart from baseline functionality, it will improve the functionality of the page

////////////////////////////////////////////////////////

// Web workers - 
// piece of browser functionality, real OS threads that can be spawned
// in background of current page to perform resource-intensive tasks

// So, if a complex stuff needs to be done, then if it is done on webpage directly, then 
// it will be cumbersome, instead it can be given to web worker

// Ex: real-time display of stocks, active users etc
// autosave functionality

const worker = new Worker("workerfile.js")
// Worker is an API interface that lets you create thread in background
// and in argument we pass the worker file
// a thread is created once a worker call is initiated, this thread only communicates with 
// its creator i.e the file which created this thread

// there are shared workers also which can be used by multiple scripts
const sharedWorker = new SharedWorker("sharedfile.js")

// web workers execute in different context, not in Global context
// they have dedicated worker context called DedicatedWorkerGlobalScope

// they do not have access to DOM or window object
// they have access to location, navigator, application cache etc
// have built-in methods like .postMessage(message)
// .onmessage
worker.postMessage("Hello")
worker.onmessage(() => {
    console.log("From onmessage")
})

// diff b/w service and web worker - 
// Service workers are a proxy between the browser and the network. 
// By intercepting requests made by the document, service workers can 
// redirect requests to a cache, enabling offline access.

// Web workers are general-purpose scripts that enable us to offload 
// processor-intensive work from the main thread.

// unlike web, service workers have dedicated role of of being a proxy between 
// the network and the browser and/or cache.
// service workers can intercept any type of network request made by main script

//                   web workers     service worker
// | Instances    | Many per tab | One for all tabs |
// | Lifespan     | Same as tab  | Independent      |
// | Intended use | Parallelism  | Offline support  |
