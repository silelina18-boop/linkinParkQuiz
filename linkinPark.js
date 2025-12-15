const { createApp, ref, computed, onMounted } = Vue;

createApp({
  setup() {
    // Данные вопросов
    const questions = ref([
      {
        id: 'q1',
        text: 'В каком году была основана группа Linkin Park?',
        options: [
          { value: '1995', text: '1995' },
          { value: '1997', text: '1997' },
          { value: '1996', text: '1996' },
          { value: '1998', text: '1998' }
        ],
        correctAnswer: '1996',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q2',
        text: 'В каком году группа Linkin Park выпустила свой первый альбом?',
        options: [
          { value: '2004', text: '2004' },
          { value: '2000', text: '2000' },
          { value: '1997', text: '1997' },
          { value: '2001', text: '2001' }
        ],
        correctAnswer: '2000',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q3',
        text: 'Какое название носит первый альбом группы?',
        options: [
          { value: 'TheHuntingParty', text: 'The Hunting Party' },
          { value: 'AThousandSuns', text: 'A Thousand Suns' },
          { value: 'Meteora', text: 'Meteora' },
          { value: 'HybridTheory', text: 'Hybrid Theory' }
        ],
        correctAnswer: 'HybridTheory',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q4',
        text: 'Какой логотип относится к группе Linkin Park?',
        options: [
          { value: 'logotip1', text: 'Логотип 1', image: 'images/logotip1.png' },
          { value: 'logotip2', text: 'Логотип 2', image: 'images/logotip2.jpg' },
          { value: 'logotip3', text: 'Логотип 3', image: 'images/logotip3.jpg' },
          { value: 'logotip4', text: 'Логотип 4', image: 'images/logotip4.jpg' }
        ],
        correctAnswer: 'logotip1',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q5',
        text: 'В каком городе родился основатель группы Майкл Шинода?',
        options: [
          { value: 'artesia', text: 'Артижа' },
          { value: 'arcadia', text: 'Аркейдия' },
          { value: 'Агура-Хиллз', text: 'Агура-Хиллз' },
          { value: 'avalon', text: 'Авалон' }
        ],
        correctAnswer: 'Агура-Хиллз',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q6',
        text: 'Какое было первоначальное название группы, в состав которой входили Майк Шинода, Брэд Дэлсон и Роб Бурдон?',
        options: [
          { value: 'xero', text: 'Xero' },
          { value: 'hybrid_theory', text: 'Hybrid Theory' },
          { value: 'lincoln_park', text: 'Lincoln Park' },
          { value: 'SuperXero', text: 'SuperXero' }
        ],
        correctAnswer: 'SuperXero',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q7',
        text: 'За какую песню группа Linkin Park получила свою первую награду Гремми?',
        options: [
          { value: 'papercut', text: 'Papercut' },
          { value: 'by_myself', text: 'By Myself' },
          { value: 'Crawling', text: 'Crawling' },
          { value: 'in_the_end', text: 'In the End' }
        ],
        correctAnswer: 'Crawling',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q8',
        text: 'Какая картинка относится к обложке третьего студийного альбома группы?',
        options: [
          { value: 'ats', text: 'ATS', image: 'images/ATS_lpblast.jpeg' },
          { value: 'living_things', text: 'Living Things', image: 'images/Living_Things.jpg' },
          { value: 'meteora', text: 'Meteora', image: 'images/Meteora.jpeg' },
          { value: 'MinutesToMidnight', text: 'Minutes to Midnight', image: 'images/Minutes-to-midnight.jpg' }
        ],
        correctAnswer: 'MinutesToMidnight',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q9',
        text: 'К какому фильму песня What I\'ve Done стала саундреком?',
        options: [
          { value: 'transformers_revenge_of_the_fallen', text: 'Трансформеры: Месть падших' },
          { value: 'Трансформеры', text: 'Трансформеры' },
          { value: 'transformers_dark_of_the_moon', text: 'Трансформеры 3: Тёмная сторона Луны' },
          { value: 'transformers_the_last-knight', text: 'Трансформеры: Последний рыцарь' }
        ],
        correctAnswer: 'Трансформеры',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q10',
        text: 'К какому фильму песня Iridescent стала саундреком?',
        options: [
          { value: 'transformers_revenge_of_the_fallen', text: 'Трансформеры: Месть падших' },
          { value: 'transformers', text: 'Трансформеры' },
          { value: 'Трансформеры 3: Тёмная сторона Луны', text: 'Трансформеры 3: Тёмная сторона Луны' },
          { value: 'transformers_the_last-knight', text: 'Трансформеры: Последний рыцарь' }
        ],
        correctAnswer: 'Трансформеры 3: Тёмная сторона Луны',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q11',
        text: 'Как зовут первого сына Честера Беннингтона?',
        options: [
          { value: 'teylar', text: 'Тейлар' },
          { value: 'rob', text: 'Роб' },
          { value: 'Джейми', text: 'Джейми' },
          { value: 'drayver', text: 'Дрейвер' }
        ],
        correctAnswer: 'Джейми',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q12',
        text: 'Какая дата рождения у Честера Беннингтона?',
        options: [
          { value: '20/03/1976', text: '20/03/1976' },
          { value: '20/04/1976', text: '20/04/1976' },
          { value: '20/03/1977', text: '20/03/1977' },
          { value: '20/02/1976', text: '20/02/1976' }
        ],
        correctAnswer: '20/03/1977',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q13',
        text: 'В честь чего второй альбом Linkin Park был назван Meteora?',
        options: [
          { value: 'meteor', text: 'В честь явления, возникающего при сгорании в атмосфере Земли метеорных тел' },
          { value: 'В честь уникального скального массива в Греции', text: 'В честь уникального скального массива в Греции' },
          { value: 'superhero', text: 'В честь вымышленного супергероя из американских комиксов и фильма' },
          { value: 'body', text: 'В честь твердого тела естественное происхождение' }
        ],
        correctAnswer: 'В честь уникального скального массива в Греции',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q14',
        text: 'Кто из участников группы является режиссером большинства ее клипов?',
        options: [
          { value: 'david_michael_farrell', text: 'Дэвид Майкл Фаррелл' },
          { value: 'brad_delson', text: 'Брэдфорд Филлип Делсон' },
          { value: 'Джозеф Хан', text: 'Джозеф Хан' },
          { value: 'robert_gregory_bourdon', text: 'Роберт Грегори Бурдон' }
        ],
        correctAnswer: 'Джозеф Хан',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q15',
        text: 'Что изображено на татуировке у Честера Беннингтона, которая была нарисована на его левой голени?',
        options: [
          { value: 'dragon', text: 'Зелёный китайский дракон' },
          { value: 'pirate', text: 'Пиратский череп, в бандане и с повязкой на глазу' },
          { value: 'Японский карп кои', text: 'Японский карп кои' },
          { value: 'soldier', text: 'Крылатый солдат "Hybrid Theory"' }
        ],
        correctAnswer: 'Японский карп кои',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q16',
        text: 'Прослушайте фрагмент песни. Из какого она альбома?',
        options: [
          { value: 'a_thousand_suns', text: 'A Thousand Suns' },
          { value: 'One More Light', text: 'One More Light' },
          { value: 'living_things', text: 'Living Things' },
          { value: 'from_zero', text: 'From Zero' }
        ],
        correctAnswer: 'One More Light',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q17',
        text: 'Какое название носила первая группа новой солистки Эмили Армстронг?',
        options: [
          { value: 'Dead Sara', text: 'Dead Sara' },
          { value: 'awolnation', text: 'Awolnation' },
          { value: 'the_gloves', text: 'The Gloves' },
          { value: 'the_airport_sessions', text: 'The Airport Sessions' }
        ],
        correctAnswer: 'Dead Sara',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q18',
        text: 'Из какой песни следующие строчки: "I don\'t want to be the one. The battles always choose. \'Cause inside I realize. That I\'m the one confused"',
        options: [
          { value: 'numb', text: 'Numb' },
          { value: 'the_catalyst', text: 'The Catalyst' },
          { value: 'Breaking the Habit', text: 'Breaking the Habit' },
          { value: 'no_more_sorrow', text: 'No More Sorrow' }
        ],
        correctAnswer: 'Breaking the Habit',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q19',
        text: 'Сколько человек входит в "классический" состав группы?',
        options: [
          { value: '4', text: '4' },
          { value: '8', text: '8' },
          { value: '6', text: '6' },
          { value: '5', text: '5' }
        ],
        correctAnswer: '6',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      },
      {
        id: 'q20',
        text: 'Как зовут актрису, которая снималась в клипе Numb?',
        options: [
          { value: 'megan_fox', text: 'Меган Фокс' },
          { value: 'Брайана Эвиган', text: 'Брайана Эвиган' },
          { value: 'amanda_bynes', text: 'Аманда Байнс' },
          { value: 'amber_heard', text: 'Эмбер Херд' }
        ],
        correctAnswer: 'Брайана Эвиган',
        selectedAnswer: null,
        attempts: 0,
        maxAttempts: 2,
        answered: false,
        correct: false,
        result: ''
      }
    ]);

    // Состояние приложения
    const currentQuestionIndex = ref(0);
    const showResults = ref(false);
    const currentImage = ref('images/linkinPark.jpeg');
    const effectsContainer = ref(null);
    const notification = ref({
      show: false,
      message: '',
      type: '',
      x: 0,
      y: 0
    });

    // Вычисляемые свойства
    const correctAnswers = computed(() => {
      return questions.value.filter(q => q.correct).length;
    });

    const allQuestionsAnswered = computed(() => {
      return questions.value.every(q => q.answered);
    });

    const percentage = computed(() => {
      return Math.round((correctAnswers.value / questions.value.length) * 100);
    });

    const resultMessage = computed(() => {
      if (percentage.value === 100) {
        return "🎉 Отличный результат! Вы настоящий эксперт по Linkin Park!";
      } else if (percentage.value >= 70) {
        return "👍 Хороший результат! Вы хорошо знаете группу.";
      } else if (percentage.value >= 50) {
        return "👌 Неплохо! Но есть куда стремиться.";
      } else {
        return "💡 Попробуйте ещё раз! Послушайте альбомы Linkin Park внимательнее!";
      }
    });

    // Методы
    function selectAnswer(questionId, answer) {
      const question = questions.value.find(q => q.id === questionId);
      if (question && !question.answered) {
        question.selectedAnswer = answer;
      }
    }

    function createEffect(x, y, type, count = 10) {
      for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.className = type;
        element.textContent = type === 'heart' ? '💕' : '❗';
        element.style.left = `${x + (Math.random() * 100 - 50)}px`;
        element.style.top = `${y}px`;
        element.style.animationDelay = `${Math.random() * 0.5}s`;
        
        if (effectsContainer.value) {
          effectsContainer.value.appendChild(element);
        }
        
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 1000);
      }
    }

    function showNotification(message, type, x, y) {
      notification.value = {
        show: true,
        message,
        type,
        x,
        y
      };
      
      setTimeout(() => {
        notification.value.show = false;
      }, 2000);
    }

    function checkAnswer(questionId) {
      const question = questions.value.find(q => q.id === questionId);
      
      if (!question.selectedAnswer) {
        alert('Пожалуйста, выберите ответ!');
        return;
      }

      question.attempts++;
      
      const button = document.querySelector(`[data-question="${questionId}"]`);
      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;
      
      if (button) {
        const rect = button.getBoundingClientRect();
        x = rect.left + rect.width / 2;
        y = rect.top;
      }

      if (question.selectedAnswer === question.correctAnswer) {
        // Правильный ответ
        question.correct = true;
        question.answered = true;
        question.result = '✅ Правильно!';
        
        createEffect(x, y, 'heart');
        showNotification('💕 Молодец!', 'correct', x, y);
        
      } else {
        // Неправильный ответ
        if (question.attempts < question.maxAttempts) {
          // Остались попытки
          const remaining = question.maxAttempts - question.attempts;
          question.result = `❌ Неправильно. Осталось попыток: ${remaining}`;
          
          createEffect(x, y, 'exclamation');
          showNotification('❗ Ты ошибся.😞!', 'incorrect', x, y);
          
        } else {
          // Попытки закончились
          question.answered = true;
          question.result = `❌ Попытки исчерпаны. Правильный ответ: ${question.correctAnswer}`;
          
          createEffect(x, y, 'exclamation');
          showNotification('❗ Попытки исчерпаны!', 'incorrect', x, y);
        }
      }
    }

    function resetQuiz() {
      questions.value.forEach(q => {
        q.selectedAnswer = null;
        q.attempts = 0;
        q.answered = false;
        q.correct = false;
        q.result = '';
      });
      showResults.value = false;
      currentQuestionIndex.value = 0;
    }

    function scrollToQuestion(index) {
      currentQuestionIndex.value = index;
      const element = document.querySelectorAll('.question-container')[index];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }

    onMounted(() => {
      // Добавляем атрибуты к кнопкам для позиционирования эффектов
      document.querySelectorAll('.answer-btn').forEach((btn, index) => {
        btn.setAttribute('data-question', questions.value[index].id);
      });
    });

    return {
      questions,
      currentQuestionIndex,
      showResults,
      currentImage,
      effectsContainer,
      notification,
      correctAnswers,
      allQuestionsAnswered,
      percentage,
      resultMessage,
      selectAnswer,
      checkAnswer,
      resetQuiz,
      scrollToQuestion
    };
  }
}).mount('#app');