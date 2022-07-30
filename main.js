let numberOfFaces = 5;
            const theLeftSide = document.getElementById("leftSide");
            const theRightSide = document.getElementById("rightSide");

            function generateFaces() {
                for (let i = 0; i < numberOfFaces; i ++) {
                    const face = document.createElement("img");
                    face.src = "https://as2.ftcdn.net/v2/jpg/00/83/95/55/1000_F_83955554_GJkpFVDvAhZ0A4TYjjZYU2zq5fflL3dS.jpg";
                    randomTop = Math.floor(Math.random() * 400 + 1);
                    randomLeft = Math.floor(Math.random() * 400 + 1);

                    face.style.top = randomTop +"px";
                    face.style.left = randomLeft +"px";
                    theLeftSide.appendChild(face);
                }

                const leftSideImages = theLeftSide.cloneNode(true);
                leftSideImages.removeChild(leftSideImages.lastElementChild);
                theRightSide.appendChild(leftSideImages);

                theLeftSide.lastChild.addEventListener("click", nextLevel);
                document.body.addEventListener("click", gameOver);
            }

            function nextLevel() {
                event.stopPropagation();
                numberOfFaces += 5;
                
                while (theLeftSide.firstChild) {
                    theLeftSide.removeChild(theLeftSide.firstChild);
                }while (theRightSide.firstChild) {
                    theRightSide.removeChild(theRightSide.firstChild)
                }
                generateFaces();
            }

            function gameOver() {
                alert("Game Over!");
                document.body.removeEventListener("click", gameOver);
                theRightSide.lastChild.removeEventListener("click", nextLevel);
            }

            restart.onclick = function newGame(event) {
                event.stopPropagation();
                location.reload(true);
            }