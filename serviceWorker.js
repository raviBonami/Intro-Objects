
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

// const worker = new Worker("workerfile.js")
// Worker is an API interface that lets you create thread in background
// and in argument we pass the worker file
// a thread is created once a worker call is initiated, this thread only communicates with 
// its creator i.e the file which created this thread

// there are shared workers also which can be used by multiple scripts
// const sharedWorker = new SharedWorker("sharedfile.js")

// web workers execute in different context, not in Global context
// they have dedicated worker context called DedicatedWorkerGlobalScope

// they do not have access to DOM or window object
// they have access to location, navigator, application cache etc
// have built-in methods like .postMessage(message)
// .onmessage
// worker.postMessage("Hello")
// worker.onmessage(() => {
//     console.log("From onmessage")
// })

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

///////////////////////////////////////////////////////////

// Service worker - JS script that gets registered with the browser
// stays registered even when offline, can load content with no connection
// intercepts the request made to a website and determines what happens to the request
// can't access the DOM, programmable network proxy - how NR are handled
// terminated when not in use and restarted when needed
// uses promises and require HTTPS

// Uses - caching assets and API calls, push notifications
// background data sync (defers some action when n/w is weak and acts on it when 
// n/w is restored)

// Service worker lifecycle and event - 
// Register -> Install -> Activate
// after activation, it can receive message events and functional events such as
// 'fetch', "push", "sync" etc

// Make a js file which will be our service worker file
// also need to check if it is supported or not
if('serviceWorker' in navigator){
    console.log("Service worker supported");
}
// In chrome it will be supported

// Now we want to load it when our browser has loaded, after being loaded
// we have to register our service worker file
if('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('serviceWorkerExample.js')
            .then(reg => console.log('Service worker registered'))
            .catch(err => console.log(`service worker ${err}`))
    })
}

// In chrome dev tools, under application -> service workers - we can see 
// our file registered as service worker
// Also, update on reload must be checked

// In service worker file - 
// Call install event - 
self.addEventListener('install', (event) => {
    console.log("Service worker: Installed")    // will install service worker
})
// In chrome dev tools - in application - service worker - service worker will be 
// shown as installed

// Activated - to activate the service worker - 
self.addEventListener('activate', e => {
    console.log('Service worker: Activated')
})

// In chrome dev tools - in cache storage, all data that needs to be cached
// to be used can be stored, and accessed even without network

// Caching - 
// We can cache individual pages and entire responses itself
const cache1 = "v1";

// List of files that needs to be cached
const cacheAssets = [
    'index.html',
    'about.html',
    'style.css',
    'main.js'
]
// If small pages are their this method is fine, but if large pages are there then we
// will need to cache entire responses

// We cache them under install events (2nd event in lifecycle)
self.addEventListener('install',(e) => {
    // making browser wait until our promise is finished
    // when done use caches browser API and open it.
    // It opens a cache and here we can pass our cache we created
    // when it opens, it gives us a promise and in that it gives us 
    // a promise object and using it we can add our files array using 
    // addAll method
    // when all done then we can use .then to skip waiting 
    e.waitUntil(
        caches
            .open(cache1)
            .then( cache => {
                console.log('Serive worker : caching file')
                cache.addAll(cacheAssets)
            })
            .then( () => self.skipWaiting() )
    )
})

// This will put the files in cache storage
// In chrome dev tools - cache storage - we can see our v1 and inside it we can 
// see our files

// Also , if we are changing our cache files, we need to remove our previous
// caches, we do this in activate event
self.addEventListener('activate', e => {

    // Remove unwanted caches
    e.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(cacheNames.map(cache => {
                if(cache !== cache1){
                    return caches.delete(cache)
                }
            }))
        })
    )
})

// Now to show files when offline we need to have fetch event
self.addEventListener('fetch',e => {
    console.log('Service worker fetching')
    e.respondWith(
        fetch(e.request).catch( () => caches.match(e.request))
    )
})
// Now if in dev tools in application - service workers - if we select offline mode
// then still we will be able see our cached files

////////////////////////////////////////////////////////////

// More on Web workers - 
// JS process that works on background of a webpage
// WW is basically a seperate thread from the main thread that helps
// us to run parallel processes
// It offloads CPU intensive work on itself so main thread is not overloaded
// WW can't do DOM manipulation

// How to create - 
// In main file of JS, on top create instance of WW and in its argument
// pass the file name of another JS script
const worker1 = new Worker('<JS file path>')

// We use Post API which allows one script to listen an event that may occur in 
// in another file

// In worker file = listening to post message
self.onmessage = function(message){
    console.log(message)
}

// In main file, the function which is doing heavy work, we can send message from 
// it to the worker file
// In main file, inside heavy function
// In postMessage, we can send any data that we want worker to have
worker1.postMessage()

// we can then cut the heavy work from function in main file to inside the
// onmessage in worker file

// So, now worker thread will do the intensive work and main thread will be free
// without being overloaded

// But, to get data back from worker, again we need to do something
// we do this by setting up onmessage in our main script file

// In main file
worker1.onmessage = function(message){
    console.log(message);
}

// In worker file, we need to send data
// in worker file inside the onmessage file
postMessage(data)   // data here refers to the data we wants to send back to 
// main file (result of intensive work)

