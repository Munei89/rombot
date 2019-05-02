var pushButton = $('.js-push-btn');

var isSubscribed = false;
var swRegistration = null;
//This is the service worker with the Cache-first network
// BEGIN SERVICE WORKERS
//Add this below content to your HTML page, or add the js file to your page at the very top to register sercie worker
if (navigator.serviceWorker.controller) {
  console.log('Dots 360 Africa active service worker found')
} else {

//Register the ServiceWorker
  navigator.serviceWorker.register('dot360-sw.js', {
    scope: './'
  }).then(function(reg) {
    console.log('Dots 360 Africa service worker has been registered for scope:'+ reg.scope);
  });
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Service Worker and Push is supported');

  navigator.serviceWorker.register('dot360-sw.js')
  .then(function(swReg) {
    console.log('Service Worker is registered', swReg);

    swRegistration = swReg;
    initializeUI();
  })
  .catch(function(error) {
    console.error('Service Worker Error', error);
  });
} else {
  console.warn('Push messaging is not supported');
  pushButton.text("Push Not Supported");
}

// Redirect Http to httpsif (location.protocol != 'https:')
var applicationServerPublicKey = 'BEnW3Y3YP92HxOCZkJFbr3pCbMLa4vJ09OEjPnB-3MGkl8z0bKSJFsdn5L7wHH3Xe5zKsWwvvdqCxJUYWNFK3xU';
function initializeUI() {
  pushButton.on('click', function() {
    pushButton.addClass('disabled');
    if (isSubscribed) {
      // : Unsubscribe user
    } else {
      subscribeUser();
    }
  });
  // Set the initial subscription value
  swRegistration.pushManager.getSubscription()
  .then(function(subscription) {
    isSubscribed = !(subscription === null);
    if (isSubscribed) {
       unsubscribeUser();
     } else {
       subscribeUser();
     }

    updateBtn();
  });
}
function updateBtn() {
  if (isSubscribed) {
    // pushButton.text('Disable Push Messaging');
  } else {
    // pushButton.text('Enable Push Messaging');
  }
}
function subscribeUser() {
  var applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
  swRegistration.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: applicationServerKey
  })
  .then(function(subscription) {
    console.log('User is subscribed.');

    updateSubscriptionOnServer(subscription);

    isSubscribed = true;

    updateBtn();
  })
  .catch(function(err) {
    console.log('Failed to subscribe the user: ', err);
    updateBtn();
  });
}
function updateSubscriptionOnServer(subscription) {

  var subscriptionJson = $('.js-subscription-json');
  var subscriptionDetails = $('.js-subscription-details');

  if (subscription) {
    // console.log(JSON.stringify(subscription));
    subscriptionDetails.removeClass('is-invisible');
  } else {
    subscriptionDetails.addClass('is-invisible');
  }
}
function urlB64ToUint8Array(base64String) {
  var padding = '='.repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
function unsubscribeUser() {
    swRegistration.pushManager.getSubscription()
    .then(function(subscription) {
      if (subscription) {
        return subscription.unsubscribe();
      }
    })
    .catch(function(error) {
      console.log('Error unsubscribing', error);
    })
    .then(function() {
      updateSubscriptionOnServer(null);

      console.log('User is unsubscribed.');
      isSubscribed = false;

      updateBtn();
    });
  }
  var deferredPrompt;

// window.addEventListener('beforeinstallprompt', function(e) {
//   console.log('beforeinstallprompt Event fired');
//   e.preventDefault();
//
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//
//   return false;
// });
window.addEventListener('beforeinstallprompt', function(e) {
  // beforeinstallprompt Event fired

  // e.userChoice will return a Promise.
  // For more details read: https://developers.google.com/web/fundamentals/getting-started/primers/promises
  e.userChoice.then(function(choiceResult) {

    console.log(choiceResult.outcome);

    if(choiceResult.outcome == 'dismissed') {
      console.log('User cancelled home screen install');
    }
    else {
      console.log('User added to home screen');
    }
  });
});
// btnSave.addEventListener('click', function() {
//   if(deferredPrompt !== undefined) {
//     // The user has had a positive interaction with our app and Chrome
//     // has tried to prompt previously, so let's show the prompt.
//     deferredPrompt.prompt();
//
//     // Follow what the user has done with the prompt.
//     deferredPrompt.userChoice.then(function(choiceResult) {
//
//       console.log(choiceResult.outcome);
//
//       if(choiceResult.outcome == 'dismissed') {
//         console.log('User cancelled home screen install');
//       }
//       else {
//         console.log('User added to home screen');
//       }
//
//       // We no longer need the prompt.  Clear it up.
//       deferredPrompt = null;
//     });
//   }
// });
