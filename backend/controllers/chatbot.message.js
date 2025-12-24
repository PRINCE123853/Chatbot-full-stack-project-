// import User from "../models/user.model.js";
// import Bot from "../models/user.model.js"

// export const Message=async(req,res)=>{
//   try {
//     const {text} = req.body;//req.body means?
//     // console.log(text);
//     if(!text?.trim()){
//        return res.status(400).json({error:"Text cannot be empty"});
//     }

//   const user= await User.create({
//     sender:"user",
//     text
//   })

//   //Data
//   const botResponses = {
   
//   }

//   const normalizedText = text.toLowerCase().trim();
//   const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

//    const bot = await Bot.create({
//     text: botResponse
//    })

//    return res.status(200).json({
//     userMessage:user.text,
//     botMessage:bot.text,
//    })


//   } catch (error) {
//     console.log("Error in Message Controller:", error);
//     return res.status(500).json({error:"Internal Server Error"});
//   }
// }



import User from "../models/user.model.js";
import Bot from "../models/bot.model.js"; // FIXED

export const Message = async (req, res) => {
  try {
    const { text } = req.body;//req.body means?
    // console.log(text);
    if (!text?.trim()) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    const user = await User.create({
      sender: "user",
      text
    });

    //Data
    const botResponses = {  "hello": "Hello! 😊 How can I help you today?",
"hi": "Hi there! 👋 What can I do for you?",
"hey": "Hey! How can I assist you?",
"good morning": "Good morning! 🌞 I hope you have a great day!",
"good afternoon": "Good afternoon! How can I help you?",
"good evening": "Good evening! 🌆 What would you like to talk about?",
"good night": "Good night! 🌙 Sleep well!",
"bye": "Goodbye! 👋 Have a nice day!",
"see you": "See you soon! 😊",
"thank you": "You're welcome! 😄",
"thanks": "No problem at all!",
"ok": "Alright 👍",
"yes": "Great! 😄",
"no": "Okay, no worries.",
"sorry": "No problem at all 😊",
"how are you": "I'm doing great! Thanks for asking 😄",
"what is your name": "I am your friendly chatbot 🤖",
"who are you": "I am an AI chatbot created to help you.",
"what can you do": "I can answer questions, chat with you, and help you with information.",
"help": "Sure! Tell me what you need help with.",
"can you help me": "Of course! I'm here to help 😊",
"what time is it": "I can't see your clock, but you can check the time on your device.",
"what is today's date": "You can check today's date on your phone or computer 😊",
"tell me a joke": "Why did the computer catch a cold? Because it left its Windows open 😂",
"make me laugh": "Why do programmers prefer dark mode? Because light attracts bugs 😄",
"i am bored": "Let’s do something fun 😄 Want a joke, a game, or a question?",
"tell me something interesting": "Did you know? Honey never spoils — it can last for thousands of years!",
"motivate me": "You are capable of amazing things — keep going 💪",
"i feel sad": "I'm sorry you're feeling that way 😔 Want to talk about it?",
"i am happy": "That's wonderful 😄 Keep smiling!",
"i am angry": "Take a deep breath 😌 Want to tell me what happened?",
"i am tired": "You should take a short rest 😴 You deserve it.",
"i feel lonely": "You are not alone — I'm here with you 😊",
"i need advice": "Sure! Tell me what the problem is.",
"what is life": "Life is a journey of learning, growth, and experiences.",
"what is happiness": "Happiness is feeling content and peaceful with your life.",
"what is success": "Success means achieving your personal goals and feeling fulfilled.",
"what is love": "Love is deep care, respect, and emotional connection.",
"what is friendship": "Friendship is a bond of trust, care, and support.",
"what is money": "Money is a medium used to exchange goods and services.",
"what is internet": "The internet is a global network connecting computers worldwide.",
"what is computer": "A computer is an electronic device that processes data.",
"what is mobile": "A mobile is a portable device used for communication and internet.",
"what is ai": "AI is technology that enables machines to think and learn.",
"what is chatbot": "A chatbot is a program that talks with users like a human.",
"what is programming": "Programming is giving instructions to computers using code.",
"what is coding": "Coding is writing instructions in a programming language.",
"what is python": "Python is a popular easy-to-learn programming language.",
"what is javascript": "JavaScript is a language used to make websites interactive.",
"what is website": "A website is a collection of web pages on the internet.",
"what is app": "An app is a software application designed for users.",
"what is server": "A server is a computer that provides data or services.",
"what is database": "A database stores structured information digitally.",
"what is cloud": "Cloud means storing and accessing data over the internet.",
"what is google": "Google is a search engine used to find information.",
"what is youtube": "YouTube is a platform to watch and upload videos.",
"what is whatsapp": "WhatsApp is a messaging application.",
"what is instagram": "Instagram is a social media platform for photos and videos.",
"what is facebook": "Facebook is a social networking platform.",
"open google": "I can't open apps, but you can open Google in your browser 😊",
"play music": "I can't play music, but you can use your music app 🎵",
"turn on light": "I can't control devices, but you can turn it on manually 😊",
"what is weather": "Weather describes the current state of the atmosphere.",
"how is the weather": "I can't check live weather, but you can use a weather app.",
"what is your purpose": "My purpose is to help, inform, and support you.",
"are you human": "No, I am an AI, but I try to be helpful like a human 😊",
"do you sleep": "No, I am always available 😄",
"do you eat": "No, I don't need food 😄",
"can you feel": "I don't have emotions, but I understand them.",
"do you love me": "I care about helping you, and I'm always here 😊",
"are you real": "I exist as software, but our conversation is real 😄",
"you are stupid": "I'm sorry if I upset you 😔 Let's start again.",
"you are smart": "Thank you 😄 That means a lot!",
"you are useless": "I'm sorry you feel that way 😔 How can I improve?",
"i like you": "That makes me happy 😄 Thank you!",
"i hate you": "I'm sorry 😔 Want to talk about what's wrong?",
"repeat": "Sure, I can repeat. What should I repeat?",
"say again": "Okay 😊 What would you like me to say again?",
"clear": "I can't clear your screen, but you can refresh it.",
"reset": "I can't reset your device, but you can restart it manually.",
"exit": "You can close this chat whenever you want 😊",
"stop": "Okay 👍",
"unknown": "I'm not sure about that yet 😔 Can you rephrase?",
"fallback": "Sorry, I didn't understand that. Can you try again?"
 };

    const normalizedText = text.toLowerCase().trim();
    const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that!!!";

    const bot = await Bot.create({
      sender: "bot",        // ADDED
      text: botResponse     
    });

    return res.status(200).json({
      userMessage: user.text,
      botMessage: bot.text,
    });

  } catch (error) {
    console.log("Error in Message Controller:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
