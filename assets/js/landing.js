const qna = {
    "How do I purchase Tenacity?": "You may purchase Tenacity by clicking the <strong>Purchase</strong> button at the top.",
    "How do I join the Tenacity Discord server?": `Click <a href="discord">here</a>!`,
    "Will my access to Tenacity ever expire?": "Tenacity is a one-time purchase. You will keep your access to the client forever (even after updates) as long as you abide by our <a href='https://intent.store/tos' target='_blank'>Terms of Service</a>.",
    "What operating systems does Tenacity support?": "Tenacity is compatible with Windows, Mac, and Linux.",
    "How frequent are the updates?": "We update Tenacity every 1-2 weeks to keep up with anti-cheat patches and bring our users new quality of life features.",
    "How long has Tenacity been in existence?": "Tenacity has been around since March 2021. With a constantly expanding userbase, we strive to create the best client and user experience for everyone.",
};

const videos = ["0sLj5uMjbvk", "aVHxsGe5kdI", "xlJNUi3hT08", "444MYR7DGIo", "XU4XHGtqxs0", "i4sFpL4Zecc"];

let count = 0;
for (const [question, answer] of Object.entries(qna)) {
    $("#acc-faq").append(`<div class="accordion-item">
        <h2 class="accordion-header" id="flush-${count}">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#flush-${count}-c" aria-expanded="false" aria-controls="flush-${count}-c">
                ${question}
            </button>
        </h2>
        <div id="flush-${count}-c" class="accordion-collapse collapse" aria-labelledby="flush-${count}" data-bs-parent="#acc-faq">
            <div class="accordion-body">${answer}</div>
    </div>`);
    count++;
}

for (let i = 0; i < videos.length; i++) {
    $("#videos").append(`<div class="col-sm-6 col-xl-4 mt-0 mb-4">
        <div class="video-container">
            <iframe src="https://www.youtube.com/embed/${videos[i]}?start=0" allowfullscreen></iframe>
        </div>
    </div>`);
}

var fullpage = new fullpage("#fullpage", {
    anchors: ["", "trailer", "info", "media", "faq", "footer"],
    navigationPosition: "right",
    verticalCentered: false,
    scrollingSpeed: 400,
    navigation: true,
});

videojs("video", {}, function () {
    this.volume(0.35);
});

tsParticles.load("particles", {
    "background": {
        "color": {
            "value": "transparent"
        },
        "image": null,
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    },
    "fullScreen": {
        "zIndex": 1
    },
    "fpsLimit": 60,
    "interactivity": {
        "events": {
            "onClick": {
                "mode": "push"
            },
            "onHover": {
                "mode": "bubble",
                "parallax": {
                    "force": 60
                }
            },
            "resize": false
        },
        "modes": {
            "bubble": {
                "distance": 400,
                "duration": 2,
                "opacity": 1,
                "size": 40,
                "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "mix": false,
                    "selectors": []
                }
            },
            "grab": {
                "distance": 400
            },
            "repulse": {
                "divs": {
                    "distance": 200,
                    "duration": 0.4,
                    "factor": 100,
                    "speed": 1,
                    "maxSpeed": 50,
                    "easing": "ease-out-quad",
                    "selectors": []
                }
            }
        }
    },
    "particles": {
        "color": {
            "value": "#ffffff"
        },
        "links": {
            "color": {
                "value": "#323031"
            },
            "distance": 150,
            "opacity": 0.4
        },
        "move": {
            "attract": {
                "rotate": {
                    "x": 600,
                    "y": 1200
                }
            },
            "enable": true,
            "path": {},
            "outModes": {
                "default": "out",
                "bottom": "out",
                "left": "out",
                "right": "out",
                "top": "out"
            },
            "speed": 6,
            "spin": {}
        },
        "number": {
            "density": {
                "enable": true
            },
            "value": 3
        },
        "opacity": {
            "animation": {
                "speed": 1,
                "minimumValue": 0.1
            }
        },
        "rotate": {
            "random": {
                "enable": true,
                "minimumValue": 3
            },
            "value": {
                "min": 3,
                "max": 7
            },
            "animation": {
                "enable": true,
                "speed": 10
            }
        },
        "shape": {
            "options": {
                "character": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                },
                "char": {
                    "fill": false,
                    "font": "Verdana",
                    "style": "",
                    "value": "*",
                    "weight": "400"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "star": {
                    "nb_sides": 5
                },
                "image": {
                    "height": 256,
                    "replace_color": true,
                    "src": "https://i.imgur.com/tF081mg.png",
                    "width": 256
                },
                "images": {
                    "height": 256,
                    "replace_color": true,
                    "src": "https://i.imgur.com/tF081mg.png",
                    "width": 256
                }
            },
            "type": "image"
        },
        "size": {
            "random": {
                "enable": true,
                "minimumValue": 64
            },
            "value": {
                "min": 64,
                "max": 256
            },
            "animation": {
                "speed": 40,
                "minimumValue": 0.1
            }
        },
        "stroke": {
            "color": {
                "value": "#000000",
                "animation": {
                    "h": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    },
                    "s": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    },
                    "l": {
                        "count": 0,
                        "enable": false,
                        "offset": 0,
                        "speed": 1,
                        "decay": 0,
                        "sync": true
                    }
                }
            }
        }
    }
});

$(window).resize(function () {
    tsParticles.dom()[0].refresh()
});
