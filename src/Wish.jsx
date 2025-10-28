/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { motion } from "framer-motion";

const Wish = ({ name }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-pink-100 relative overflow-hidden">
      {/* ❤️ Soft heart-pattern background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/hearts.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      ></div>

      <motion.div
        className="relative z-10 max-w-3xl w-[90%] md:w-[70%] p-6 md:p-10 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl overflow-y-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          maxHeight: "90vh",
          whiteSpace: "pre-line",
        }}
      >
        <div
          className="text-gray-800 text-base md:text-lg leading-relaxed font-serif"
          style={{ lineHeight: "1.9" }}
        >
{`💫 To My Irfee 💫

August 27, 2023 – Brother’s engagement 💍
That was the day I first saw you - just a stranger then. I thought it was just an attraction, nothing more… but something inside me felt different ❤️

January 11, 2025 – Brother’s haldi 💛
Didn’t see you much that day, but when you crossed me, I felt something again. You didn’t notice, but I did 🥹

January 12, 2025 – Brother’s wedding 💐
I never thought I would actually see you, but somehow I did — not just once, but multiple times. Every single glimpse made my heart flutter💞 I even saw you taking photos with your family… you looked so happy, and it was such a beautiful sight to see.

May 25, 2025 – When your father passed away 💔
When I heard the news, I really wanted to talk to you, to comfort you, to be by your side — but I didn’t know how to reach you. So I started writing messages which I could never send — instead, I conveyed them through snaps and I can understand that you weren’t in a state to read them. They became my own silent prayers for your strength 🙏 I knew you were shattered, so I just prayed to Allah to give you peace and courage.

June 7, 2025 – Bakrid 🌙
My first ever message to you — “Eid Mubarak.” Honestly, I texted just to talk to you, expecting nothing in return. But to my surprise, you replied. U did it just for courtesy, but for me, it felt like a small miracle 💫

September 14, 2025 – Your first message to me 💬
That day was special. I was so stressed about work and suddenly — your message popped up. I can’t describe how happy I was! 🥰 It felt like the whole world paused for a second. From that day, everything changed — our daily chats, those good morning messages ☀️… they became my reason to smile.

If you didn’t text one day, I would overthink so much like — “Did I say something wrong? Did I upset him?” 😔
I still don’t know what to call this bond between us. Maybe you don’t feel the same or maybe you are not expressing it, and that’s okay. I just never wanted to be a burden to you. All I ever wanted was a healthy, happy bond between us💖

I talk a lot 😅, and I love talking to you. Even when you ignore a few messages, I try to understand — maybe you are busy, maybe tired, or you feel like you don't want to reply to those messages. But those little fights, those “enna madam marantiya 😏” texts — they make my heart melt every single time 💓

When you say “sorry”, I act normal… but inside, I melt completely 😭
And when you call me “madam” or “ma”, or that one time you said “thangamey” 😭💞 — that voice message, I have heard it on loop so many times. It still makes my heart skip a beat every time 💗

I used to read books 📚, but now I read your chats, your texts, your voice notes — again and again. They have become my favorite pages.

October 9, 2025 – You said you’ll come to meet me 💭
I was sooo happy that day! But then… no message, no update. Not even a small text 😔 I understood you’re busy, but it hurts. Tears rolled down when I realized maybe I wasn’t someone worth showing up for 💔

Still, I forgave. I told myself — “It’s okay, it's part of life.”
Even after being hurt, I still wanted to celebrate my birthday 🎂 with you. But again… it didn’t happen. Maybe Allah didn’t want us to meet that day.

October 18, 2025 – My birthday 🎉
Everyone wished me, but I was waiting for your message. When it came, I was endlessly happy 🥹❤️ But later that day, I broke down again. I asked for a video call, you said you will — but it never happened 💔 It made me question — “Does he really care? Or am I just someone to pass time?”

Still, I smiled. Because my heart refused to hate you.

October 22, 2025 – The day we finally met 🫶
Seeing the baby was the reason we met — maybe Allah planned it that way. When I saw you, I froze. My heart was beating so fast 😳 Your pink face, your cute smile — I will never forget it ❤️ The eye contact, those few moments… I didn’t know how to handle it. I was so shy to even look at you properly 🙈

You didn’t know, but in that short time, I felt peace. Real peace.

I never asked for your money, gifts, or big things.
All I wanted was your time — not your leftover minutes ⏳

Even a small message from you makes my day brighter ☀️
I don’t want any toxic sort of bonding, just something pure, kind, and honest bonding between us💖

I know we both are busy with our jobs, but even those few minutes we talk — they are the happiest moments for me 🥰

And one more thing… every time we fight, the way you handle things and bring me back feels so special. I used to think you might leave me, but you always choose to hold me with your words instead. Just don’t use harsh or bad words with me — they hurt me more than you think 💔

This is everything I wanted to tell you… maybe I forgot a few things, but I have written it all straight from my heart 💌

Happy Birthday My Irfee 🎂💖
My cute, caring, lovable HR 😍
No matter what happens — I will always be there for you, in your good times and bad times hereafter 💕
Always praying for your happiness and good health 🤲✨

With love,
Yours truly 💖`}
        </div>
      </motion.div>
    </div>
  );
};

export default Wish;



