var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
// query selector variables go here 👇
var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
var mainPosterSection = document.querySelector('.main-poster');
var posterFormSection = document.querySelector('.poster-form');
var savedPostersSection = document.querySelector('.saved-posters');
var unmotivationalPosterSection = document.querySelector('.unmotivational-poster');
var savedPostersGrid = document.querySelector('.saved-posters-grid');
var savedUnmotivationalPostersGrid = document.querySelector('.unmotivational-poster-flex');
var modalElement = document.querySelector('dialog');
// we've provided you with some data to work with 👇
// tip: you can tuck this data out of view with the dropdown found near the line number where the variable is declared 
var unmotivationalPosters = [
    {
        name: "FAILURE",
        description: "Why bother trying? It's probably not worth it.",
        price: 68.00,
        year: 2019,
        vintage: true,
        img_url: "./assets/failure.jpg",
    },
    {
        name: "MEDIOCRITY",
        description: "Dreams are just that—dreams.",
        price: 127.00,
        year: 2021,
        vintage: false,
        img_url: "./assets/mediocrity.jpg",
    },
    {
        name: "REGRET",
        description: "Hard work rarely pays off.",
        price: 89.00,
        year: 2018,
        vintage: true,
        img_url: "./assets/regret.jpg",
    },
    {
        name: "FUTILITY",
        description: "You're not good enough.",
        price: 150.00,
        year: 2016,
        vintage: false,
        img_url: "./assets/futility.jpg",
    },
    {
        name: "DEFEAT",
        description: "It's too late to start now.",
        price: 35.00,
        year: 2023,
        vintage: false,
        img_url: "./assets/defeat.jpg",
    },
    {
        name: "HOPELESSNESS",
        description: "Stay in your comfort zone; it's safer.",
        price: 112.00,
        year: 2020,
        vintage: true,
        img_url: "./assets/hopelessness.jpg",
    },
    {
        name: "LAZINESS",
        description: "You can't change anything.",
        price: 25.00,
        year: 2022,
        vintage: false,
        img_url: "./assets/laziness.jpg",
    },
    {
        name: "PROCRASTINATION",
        description: "Better to avoid failure by not trying at all.",
        price: 48.00,
        year: 2017,
        vintage: true,
        img_url: "./assets/procrastination.jpg",
    },
    {
        name: "DESPAIR",
        description: "Let someone else do it; you’ll just mess it up.",
        price: 73.00,
        year: 2015,
        vintage: false,
        img_url: "./assets/despair.jpg",
    },
    {
        name: "NEGLECT",
        description: "Happiness is overrated.",
        price: 160.00,
        year: 2019,
        vintage: true,
        img_url: "./assets/neglect.jpg",
    },
    {
        name: "FEAR",
        description: "Giving up is always an option.",
        price: 91.00,
        year: 2014,
        vintage: false,
        img_url: "./assets/fear.jpg",
    },
    {
        name: "APATHY",
        description: "No one cares about your effort.",
        price: 110.00,
        year: 2016,
        vintage: true,
        img_url: "./assets/apathy.jpg",
    },
    {
        name: "MISERY",
        description: "Why take risks when you can stay stagnant?",
        price: 55.00,
        year: 2021,
        vintage: false,
        img_url: "./assets/misery.jpg",
    },
    {
        name: "BLAME",
        description: "Expect disappointment and you'll never be disappointed.",
        price: 39.00,
        year: 2017,
        vintage: true,
        img_url: "./assets/blame.jpg",
    },
    {
        name: "DOUBT",
        description: "Success is for other people, not you.",
        price: 140.00,
        year: 2020,
        vintage: false,
        img_url: "./assets/doubt.jpg",
    }
];
var images = [
    "./assets/bees.jpg",
    "./assets/bridge.jpg",
    "./assets/butterfly.jpg",
    "./assets/cliff.jpg",
    "./assets/elephant.jpg",
    "./assets/flock.jpg",
    "./assets/fox.jpg",
    "./assets/frog.jpg",
    "./assets/horse.jpg",
    "./assets/lion.jpg",
    "./assets/mountain.jpg",
    "./assets/pier.jpg",
    "./assets/puffins.jpg",
    "./assets/pug.jpg",
    "./assets/runner.jpg",
    "./assets/squirrel.jpg",
    "./assets/tiger.jpg",
    "./assets/turtle.jpg"
];
var titles = [
    "determination",
    "success",
    "inspiration",
    "perspiration",
    "grit",
    "empathy",
    "feelings",
    "hope",
    "believe",
    "try",
    "conviction",
    "accomplishment",
    "achievement",
    "ambition",
    "clarity",
    "challenge",
    "commitment",
    "confidence",
    "action",
    "courage",
    "focus",
    "breathe",
    "gratitude",
    "imagination",
    "kindness",
    "mindfulness",
    "knowledge",
    "opportunity",
    "passion",
    "patience",
    "practice",
    "smile",
    "trust",
    "understanding",
    "wisdom"
];
var quotes = [
    "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
    "You are braver than you believe, stronger than you seem and smarter than you think.",
    "You are confined only by the walls you build yourself.",
    "The one who has confidence gains the confidence of others.",
    "Act as if what you do makes a difference. It does.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Never bend your head. Always hold it high. Look the world straight in the eye.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Believe you can and you're halfway there.",
    "When you have a dream, you've got to grab it and never let go.",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "No matter what you're going through, there's a light at the end of the tunnel.",
    "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
    "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
    'Limit your "always" and your "nevers."',
    "You are never too old to set another goal or to dream a new dream.",
    "Try to be a rainbow in someone else's cloud.",
    "You do not find the happy life. You make it.",
    "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
    "Sometimes you will never know the value of a moment, until it becomes a memory.",
    "The most wasted of days is one without laughter.",
    "You must do the things you think you cannot do.",
    "It isn't where you came from. It's where you're going that counts.",
    "It is never too late to be what you might have been.",
    "Happiness often sneaks in through a door you didn't know you left open.",
    "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
    "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
    "Be the change that you wish to see in the world.",
    "Let us make our future now, and let us make our dreams tomorrow's reality.",
    "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
    "If I cannot do great things, I can do small things in a great way.",
    "Don't wait. The time will never be just right.",
    "With the right kind of coaching and determination you can accomplish anything.",
    "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
    "No matter what people tell you, words and ideas can change the world.",
    "Each person must live their life as a model for others.",
    "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;
// event listeners go here 👇
document.addEventListener('DOMContentLoaded', function () {
    setNewPoster();
    displayCurrentPoster();
    storeUnmotivationalPostersElements(cleanData());
});
document.querySelector('.show-random').addEventListener('click', function () {
    setNewPoster();
    displayCurrentPoster();
});
document.querySelectorAll('.show-saved, .back-to-main').forEach(function (button) {
    button.addEventListener('click', function () {
        displayNewSection(mainPosterSection, savedPostersSection);
    });
});
document.querySelector('.make-poster').addEventListener('click', function (event) {
    handleFormSubmission(event);
});
document.querySelectorAll('.show-main, .show-form').forEach(function (button) {
    button.addEventListener('click', function () {
        displayNewSection(mainPosterSection, posterFormSection);
    });
});
document.querySelector('.save-poster').addEventListener('click', handleSavePoster);
document.querySelectorAll('.back-to-main-unmotivational, .show-unmotivational-poster').forEach(function (button) {
    button.addEventListener('click', function () {
        displayNewSection(unmotivationalPosterSection, mainPosterSection);
    });
});
savedUnmotivationalPostersGrid.addEventListener('dblclick', function (event) {
    handleDeletePosters(event.target);
});
document.querySelector('.poster').addEventListener('click', function (event) {
    handlePosterClick(event.target);
});
savedPostersGrid.addEventListener('dblclick', function (event) {
    handleModalSreen(event.target);
});
document.querySelector('#closeModal').addEventListener('click', handleCloseModalScreen);
savedPostersGrid.addEventListener('dragstart', function (event) {
    handlePosterDrag(event.target);
});
savedPostersGrid.addEventListener('dragover', function (event) {
    handlePosterDragOver(event);
});
// functions and event handlers go here 👇
var handlePosterClick = function (target) {
    if (target.tagName == "IMG") {
        target.src = images[getRandomIndex(images)];
        currentPoster = createPoster(target.src, currentPoster.title, currentPoster.quote);
    }
    if (target.tagName == "H1") {
        target.innerText = titles[getRandomIndex(titles)];
        currentPoster = createPoster(currentPoster.imageURL, target.innerText, currentPoster.quote);
    }
    if (target.tagName == "H3") {
        target.innerText = quotes[getRandomIndex(quotes)];
        currentPoster = createPoster(currentPoster.imageURL, currentPoster.title, target.innerText);
    }
};
var handleDeletePosters = function (target) {
    var poster = target.closest('article');
    if (poster) {
        poster.remove();
    }
};
var handleModalSreen = function (target) {
    var poster = target.closest('article');
    if (!poster) {
        return;
    }
    var posterClone = poster.cloneNode(true);
    modalElement.insertAdjacentElement('afterbegin', posterClone);
    modalElement.showModal();
    modalElement.addEventListener('keydown', handleKeyDownEvent);
};
function handleKeyDownEvent(event) {
    if (event.key === 'Escape') {
        handleCloseModalScreen();
        modalElement.removeEventListener('keydown', handleKeyDownEvent);
    }
}
var handleFormSubmission = function (event) { return __awaiter(_this, void 0, void 0, function () {
    var form, validImage, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                form = document.querySelector('form');
                if (!form.checkValidity()) {
                    form.reportValidity();
                    return [2 /*return*/];
                }
                event.preventDefault();
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, isImage(document.querySelector('#poster-image-url').value)];
            case 2:
                validImage = _a.sent();
                console.log("The URL points to a valid image.");
                handleMakePoster();
                storeCurrentPosterElement();
                return [3 /*break*/, 4];
            case 3:
                error_1 = _a.sent();
                alert(("The URL does not point to a valid image."));
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var handlePosterDragOver = function (event) {
    event.preventDefault();
    var afterElement = getDragAfterElement(event.target);
    var draggable = document.querySelector('.dragging');
    if (afterElement) {
        afterElement.classList.add('drag-border');
    }
    savedPostersGrid.querySelectorAll('article').forEach(function (poster) {
        if (poster !== afterElement) {
            poster.classList.remove('drag-border');
        }
    });
};
var handlePosterDrag = function (target) {
    var poster = target.closest('article');
    if (!poster) {
        return;
    }
    draggingFunctionality(poster);
};
var draggingFunctionality = function (poster) {
    poster.classList.add('dragging');
    poster.addEventListener('dragend', function () {
        poster.classList.remove('dragging');
        dragTarget = savedPostersGrid.querySelector('.drag-border');
        if (dragTarget) {
            swapElements(poster, dragTarget);
        }
        savedPostersGrid.querySelectorAll('article').forEach(function (poster) {
            poster.classList.remove('drag-border');
        });
    });
};
var getDragAfterElement = function (target) {
    var poster = target.closest('article');
    if (poster) {
        return poster;
    }
    return null;
};
function mousingOverDrag(event) {
    event.target.classList.add('drag-border');
}
function swapElements(element1, element2) {
    var grid = savedPostersGrid;
    var placeholder = document.createElement('div');
    grid.insertBefore(placeholder, element1);
    grid.insertBefore(element1, element2);
    grid.insertBefore(element2, placeholder);
    grid.removeChild(placeholder);
}
function handleCloseModalScreen() {
    document.querySelector('dialog .mini-poster').remove();
    modalElement.close();
}
function handleSavePoster() {
    if (savedPosters.includes(currentPoster)) {
        return;
    }
    savedPosters.push(currentPoster);
    storeCurrentPosterElement();
}
var storeCurrentPosterElement = function () {
    savedPostersGrid.insertAdjacentHTML("beforeend", "<article class=\"mini-poster\" id=".concat(currentPoster.id, " draggable='true'>\n        <img src=").concat(currentPoster.imageURL, ">\n        <h2>").concat(currentPoster.title, "</h2>\n        <h4>").concat(currentPoster.quote, "</h4>\n    </article>\n    "));
};
var handleMakePoster = function () {
    setNewPosterFromForm();
    displayCurrentPoster();
    displayNewSection(mainPosterSection, posterFormSection);
};
var isImage = function (url) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () { return resolve(); };
        img.onerror = function () { return reject(); };
        img.src = url;
        console.log("Attempting to load image from: ".concat(img.src));
    });
};
var setNewPosterFromForm = function () {
    var imageURL = document.querySelector('#poster-image-url').value;
    var title = document.querySelector('#poster-title').value;
    var quote = document.querySelector('#poster-quote').value;
    currentPoster = createPoster(imageURL, title, quote);
};
var setNewPoster = function () {
    var imageURL = images[getRandomIndex(images)];
    var title = titles[getRandomIndex(titles)];
    var quote = quotes[getRandomIndex(quotes)];
    currentPoster = createPoster(imageURL, title, quote);
};
var displayCurrentPoster = function () {
    posterImage.src = currentPoster.imageURL;
    posterTitle.textContent = currentPoster.title;
    posterQuote.textContent = currentPoster.quote;
};
var storeUnmotivationalPostersElements = function (data) {
    for (var i = 0; i < data.length; i++) {
        savedUnmotivationalPostersGrid.insertAdjacentHTML("beforeend", "\n    <article class=\"mini-poster\" id=".concat(data[i].id, ">\n      <img src=").concat(data[i].imageURL, ">\n      <h2>").concat(data[i].title, "</h2>\n      <h4>").concat(data[i].quote, "</h>\n    </article>\n    "));
    }
};
var displayNewSection = function (section1, section2) {
    section1.classList.toggle('hidden');
    section2.classList.toggle('hidden');
};
var cleanData = function () {
    return unmotivationalPosters.map(function (data) {
        return createPoster(data.img_url, data.name, data.description);
    });
};
// (we've provided two to get you started)!
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}
function createPoster(imageURL, title, quote) {
    return {
        id: Date.now(),
        imageURL: imageURL,
        title: title,
        quote: quote
    };
}
