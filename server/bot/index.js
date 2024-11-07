const { Telegraf } = require('telegraf');
const { addToWaitlist } = require('../controllers/coursesController');

const bot = new Telegraf(process.env.BOT_TOKEN);

const userData = {};  // Временное сохранение данных пользователя
const emojis = ['😴', '😶', '🤖', '😘']; // Список эмодзи

bot.start((ctx) => {
  const chatId = ctx.chat.id;
  
  // Сброс состояния пользователя при повторном запуске
  userData[chatId] = { step: 'name', isRegistered: false };

  ctx.reply(
    'Привет! Тут ты можешь зарегистрироваться на курс "Внутренний критик". Этот курс об...'
    + '\n\nДля предзаписи на курс нужно ответить на несколько вопросов 😊'
  );
  ctx.reply('Введите ваше имя 😎');
});

bot.on('text', async (ctx) => {
  const chatId = ctx.chat.id;

  // Если пользователь уже зарегистрирован, отвечаем случайным эмодзи
  if (userData[chatId] && userData[chatId].isRegistered) {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    return ctx.reply(randomEmoji);
  }

  // Если данных пользователя нет, создаем запись
  if (!userData[chatId]) {
    userData[chatId] = { step: 'name', isRegistered: false };
  }

  const step = userData[chatId].step;
  const text = ctx.message.text;

  if (step === 'name') {
    userData[chatId].name = text;
    userData[chatId].step = 'surname';
    return ctx.reply('Введите вашу фамилию 😃');
  } else if (step === 'surname') {
    userData[chatId].surname = text;
    userData[chatId].step = 'email';
    return ctx.reply('Пожалуйста, напиши свой email 😉');
  } else if (step === 'email') {
    userData[chatId].email = text;

    // Проверка и сохранение
    try {
      const response = await addToWaitlist({
        chatId,
        name: userData[chatId].name,
        surname: userData[chatId].surname,
        email: userData[chatId].email,
        courseId: '1'
      });
      ctx.reply(response.message);

      // Устанавливаем флаг регистрации
      userData[chatId].isRegistered = true;
    } catch (error) {
      ctx.reply('Произошла ошибка, попробуйте позже или обратитесь в службу заботы direct@tsarevaschool.ru');
      console.error(error);
    } finally {
      // Очистка данных пользователя, кроме флага регистрации
      userData[chatId] = { isRegistered: true };
    }
  }
});

module.exports = bot;
