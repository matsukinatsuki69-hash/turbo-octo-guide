        // Password hadiah (Anda bisa mengubahnya)
        const secretPassword = "iid12345@";
        
        // Daftar teka-teki
        const puzzles = [
            {
                category: "IPA",
                question: "Zat apa yang ketika dimurnikan menjadi sangat berbahaya, tetapi dalam bentuk alaminya justru penting untuk kehidupan?",
                answer: "air",
                explanation: "Air murni (H₂O tanpa mineral) dapat berbahaya karena dapat melarutkan mineral dari tubuh, sedangkan air alami penting untuk kehidupan."
            },
            {
                category: "Matematika",
                question: "Apa angka terakhir dari π (pi)?",
                answer: "tidak ada",
                explanation: "π adalah bilangan irasional yang tidak memiliki angka terakhir karena digitnya berlanjut tanpa pola yang berulang."
            },
            {
                category: "IPS",
                question: "Negara mana yang pernah memiliki inflasi tertinggi dalam sejarah, mencapai 89,7 sextillion persen pada November 2008?",
                answer: "zimbabwe",
                explanation: "Zimbabwe mengalami hiperinflasi parah pada tahun 2008, memaksa mereka untuk meninggalkan mata uang mereka sendiri."
            },
            {
                category: "IPA",
                question: "Jika sebuah pohon tumbang di hutan dan tidak ada orang yang mendengarnya, apakah pohon itu mengeluarkan suara?",
                answer: "ya",
                explanation: "Suara adalah gelombang tekanan di udara, jadi pohon yang tumbang akan menghasilkan suara terlepas dari ada atau tidaknya pengamat."
            },
            {
                category: "Matematika",
                question: "Berapa banyak bilangan prima antara 1 dan 100?",
                answer: "25",
                explanation: "Bilangan prima antara 1-100 adalah: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97 (total 25)"
            },
            {
                category: "IPS",
                question: "Apa nama kapal yang membawa Charles Darwin dalam ekspedisi ilmiahnya yang terkenal?",
                answer: "hms beagle",
                explanation: "HMS Beagle adalah kapal yang membawa Charles Darwin dalam perjalanan lima tahun (1831-1836) yang menginspirasi teori evolusinya."
            },
            {
                category: "IPA",
                question: "Organ tubuh manusia apa yang mampu meregenerasi diri sepenuhnya, bahkan jika 75% darinya hilang?",
                answer: "hati",
                explanation: "Hati memiliki kemampuan regeneratif yang luar biasa dan dapat tumbuh kembali ke ukuran penuh bahkan setelah sebagian besar diangkat."
            },
            {
                category: "Matematika",
                question: "Dalam sistem biner, apa hasil dari 1010 + 1101?",
                answer: "10111",
                explanation: "1010 (10 dalam desimal) + 1101 (13 dalam desimal) = 10111 (23 dalam desimal)"
            },
            {
                category: "IPS",
                question: "Siapa pemimpin dunia yang masih memerintah paling lama saat ini?",
                answer: "raja bhumibol adulyadej",
                explanation: "Raja Bhumibol Adulyadej dari Thailand memerintah selama 70 tahun 126 hari (1946-2016), meskipun saat ini sudah meninggal."
            },
            {
                category: "Hukum",
                question: "Prinsip hukum apa yang menyatakan bahwa seseorang tidak boleh dihukum dua kali untuk kejahatan yang sama?",
                answer: "ne bis in idem",
                explanation: "Ne bis in idem adalah prinsip hukum yang melarang penuntutan ganda untuk kejahatan yang sama."
            }
        ];
        
        // Variabel untuk melacak jawaban benar
        let correctAnswers = 0;
        const totalPuzzles = puzzles.length;
        
        // Fungsi untuk menampilkan teka-teki
        function displayPuzzles() {
            const puzzlesContainer = document.getElementById('puzzles');
            
            puzzles.forEach((puzzle, index) => {
                const puzzleElement = document.createElement('div');
                puzzleElement.className = 'puzzle';
                puzzleElement.id = `puzzle-${index}`;
                
                puzzleElement.innerHTML = `
                    <div class="puzzle-number">${index + 1}</div>
                    <span class="category ${puzzle.category.toLowerCase()}">${puzzle.category}</span>
                    <h3>${puzzle.question}</h3>
                    <input type="text" class="answer-input" id="answer-${index}" placeholder="Jawaban Anda...">
                    <button class="check-btn" onclick="checkAnswer(${index})">Periksa Jawaban</button>
                    <div class="feedback" id="feedback-${index}"></div>
                `;
                
                puzzlesContainer.appendChild(puzzleElement);
            });
        }
        
        // Fungsi untuk memeriksa jawaban
        function checkAnswer(index) {
            const userAnswer = document.getElementById(`answer-${index}`).value.trim().toLowerCase();
            const correctAnswer = puzzles[index].answer.toLowerCase();
            const feedbackElement = document.getElementById(`feedback-${index}`);
            
            if (userAnswer === correctAnswer) {
                feedbackElement.textContent = `Benar! ${puzzles[index].explanation}`;
                feedbackElement.className = 'feedback correct';
                feedbackElement.style.display = 'block';
                
                // Jika belum tercatat sebagai benar sebelumnya
                if (!puzzles[index].answeredCorrectly) {
                    puzzles[index].answeredCorrectly = true;
                    correctAnswers++;
                    updateProgress();
                }
            } else {
                feedbackElement.textContent = 'Jawaban salah. Coba lagi!';
                feedbackElement.className = 'feedback incorrect';
                feedbackElement.style.display = 'block';
            }
            
            // Periksa apakah semua pertanyaan telah dijawab benar
            if (correctAnswers === totalPuzzles) {
                showPrize();
            }
        }
        
        // Fungsi untuk memperbarui progress bar
        function updateProgress() {
            const progressPercentage = (correctAnswers / totalPuzzles) * 100;
            document.getElementById('progressBar').style.width = `${progressPercentage}%`;
            document.getElementById('progressText').textContent = `${correctAnswers}/${totalPuzzles} pertanyaan terjawab benar`;
        }
        
        // Fungsi untuk menampilkan hadiah
        function showPrize() {
            document.getElementById('prizeSection').style.display = 'block';
            document.getElementById('prizePassword').textContent = secretPassword;
            
            // Scroll ke bagian hadiah
            document.getElementById('prizeSection').scrollIntoView({ behavior: 'smooth' });
        }
        
        // Inisialisasi halaman
        window.onload = function() {
            displayPuzzles();
            updateProgress();
        };