# Bayes Theorem Interactive

# **One of my favorite things in Probability is Bayes' Theorem.**

#### Understanding how this works is an incredible superpower. In a nutshell, it's all about updating your beliefs based on new evidence.
(Statistically speaking... I'm 95% confident that updating one's beliefes based on new evidence is a good thing.)

This silly little web app visualizes **Bayes' theorem** through a set of sliders and a diagram. The application allows you to manipulate the prior probability of a hypothesis and the likelihood of evidence in both the true and false cases. As you adjust the sliders the graphic and the computed posterior probability update instantly. The goal is to help my students build intuition for how beliefs are updated when new evidence appears.

The notation in the app follows standard probability conventions. For example,
`P(E | H)` is read as "the probability of the evidence `E` assuming the
hypothesis `H` is true." Likewise, `P(E | ¬H)` represents the probability of the
evidence when the hypothesis does not hold; the symbol `¬` simply means
"not." 

These quantities feed into Bayes' theorem to compute the updated belief
`P(H | E)`.
![Bayes Theorem Formula v2](https://github.com/user-attachments/assets/8dd4f1d5-a2ba-429c-bba8-a5af5d2d428e)



## Quick start

[Try it out!](https://untwist.github.io/bayes/bayes_interactive.html)

or...
Clone repository, open `bayes_interactive.html` in your browser.

## Oh... and while I have your attention. I've got something that you may like:
![mens-t-shirt-regular-smoke-front-back-1](https://github.com/user-attachments/assets/497f4830-000b-4018-90b6-43e48155c7a2)

[You can buy this T-shirt from my Threadless Store!](https://toddbrous.threadless.com/designs/bayes-theorem-black/mens/t-shirt/regular?variation=front-back)


# **How to think about this:**

## 1\. **Start with What You Know (Your Guess\!)**

Imagine you’re a detective, and you want to figure out if an article is fake news. Before you even look closely, you probably already have a guess. Maybe you think **5 out of 100 articles** you see online are fake news. That’s your **starting point**, called a **prior belief**. It’s like your best guess before you dig into the clues.

 

## 2\. **Collect Clues (New Evidence\!)**

Now, you find some clues about the article. Let’s say:

* The headline is super dramatic.  
* The website isn’t one you’ve heard of.  
* There are spelling mistakes.

These clues are called **evidence**. They help you decide if the article might be fake.

 

## 3\. **Ask: How Surprising Are the Clues?**

Here’s the cool part\!

You need to ask yourself:

* **How often do fake articles have these clues?** (Maybe most fake articles have dramatic headlines and spelling mistakes.)  
* **How often do real articles have these clues?** (Maybe some real articles are dramatic too, but they usually don’t have so many mistakes.)

 

## 4\. **Update Your Guess**

Now, use the clues to adjust your guess. If the clues make fake news much more likely than real news, you should **raise your belief** that this article is fake.

If the clues don’t help much, you don’t change your guess very much.

## 5\. **Make Your Best Call**

After combining what you already believed (your starting guess) with the new clues, you decide: "How likely is it that this article is fake?"

 

---

# **A Simple Example: Good dog or bad dog?**

You walk into the kitchen and see that **a sandwich is missing**.  
You wonder:

**“Did the dog steal my sandwich?”**

## **Step 1: Your Prior Belief (What You Believe at the Start)**

You know how your dog ***usually*** **behaves**. He almost never steals food... only about **1 out of 20 times**.  
So your **prior belief** is:

* There’s only a **5% chance** the dog stole the sandwich.  
  * There's a **95% chance** something else happened (like your little brother ate it).

## **Step 2: You Find New Evidence\!**

You look at the counter and see:

* **Dog paw prints on the kitchen counter\!**

Now you ask:

**“Does this clue make it *more* likely the dog stole the sandwich?”**

## **Step 3: Think About the Evidence**

You know:

* If the **dog did steal** the sandwich, he leaves paw prints **90% of the time.**  
  * But even if the **dog DIDN'T steal** it (maybe your brother did), **your dog only jumps on the counter sometimes... but only 10% of the time.**  
  * If the dog is innocent, paw prints are not likely (only 10% chance), but they could still happen sometimes.

So paw prints are a **much stronger clue** if the dog stole it than if he didn’t. Paw prints are common when the dog is guilty, but rare when he's innocent.

## **Step 4: Update Your Belief**

At first, you thought the dog was guilty only **5%** of the time.  
But now you’ve found **a clue (paw prints)** that’s *way more likely* if the dog did it.

So now, your belief changes:  
You think the dog is **much more likely to be guilty**—maybe 30% or even 50% chance\!

You’ve used the clue to **update your thinking**\!

---

## **Critical Thinking in the Age of AI is a good thing to have\!**

#### Bayes helps you figure it out.

* **You don’t jump to conclusions.** You start with a guess but are ready to change your mind if new clues say something different.  
* **You question the evidence.** Not all clues are useful, and you think about how surprising they are.  
* **You stay curious\!** Instead of saying, “This article *must* be fake\!” you think carefully about what’s likely true.

---

# **More explicitly   (Warning: I show some math here, but it's easy.):**

## **"The probability of the hypothesis being true, given the evidence."**

**(How likely the evidence is *if* the hypothesis is true)** × **(How much you believed the hypothesis to start with)** ÷ **(How likely the evidence is overall)**

That "vertical bar"... the "**|**" symbol... or the 'pipe'... is spoken as the word "**given**".

## Hypothesis (H):

“The dog stole the sandwich.”

## Evidence (E):

“There are paw prints on the counter.”

## 1\. **P(H): The Prior**

This is your **starting belief** before seeing any evidence.

You think the dog *usually doesn’t* steal food—maybe **5% of the time**.

So:

P(H) \= 0.05

## 2\. **P(E | H): The Likelihood**

This means:

“If the dog *did* steal the sandwich, how likely is it that we’d see paw prints?”

You know:

The dog leaves paw prints **90%** of the time when he’s guilty.

So:

P(E|H) \= 0.9

## 3\. **P(E): The Model Evidence**

This means:

“What’s the total chance of seeing paw prints, no matter who did it?”

We calculate this by imagining **both cases**:

a) The dog did it (5% of the time), and in those cases, paw prints appear 90% of the time:

0.9 × 0.05 \= 0.045

b) The dog didn’t do it (95% of the time), and in those cases, he still sometimes jumps on the counter (10%):

0.95 × 0.1 \= 0.095

Now add both:

P(E) \= 0.045 \+ 0.095 \= 0.14

## **4\. Plug It In\!**

### 

So after seeing the paw prints, your belief that the dog stole the sandwich goes from **5% to 32%**\!

That's a **huge update...** but it's *not* 100% proof.

 

---

### One of the best explainer video series on Bayes' Theorem comes from 3Blue1Brown:

* [https://youtu.be/HZGCoVF3YvM?si=qVt6NSL3ot69S0C6](https://youtu.be/HZGCoVF3YvM?si=qVt6NSL3ot69S0C6)  
* [https://youtu.be/U\_85TaXbeIo?si=4ioih3MsFI5ny4ls](https://youtu.be/U_85TaXbeIo?si=4ioih3MsFI5ny4ls)  
* [https://youtu.be/lG4VkPoG3ko?si=g\_eg2GjTygEq4\_xk](https://youtu.be/lG4VkPoG3ko?si=g_eg2GjTygEq4_xk)

## Planned tutorials and scenarios

The repository will gradually include short tutorials illustrating classical uses of Bayes' theorem, such as:

- Analysing a medical test's reliability when the disease is rare.
- Distinguishing between biased and fair coins using repeated tosses.

These scenarios will highlight how the sliders correspond to the quantities in Bayes' formula and how the posterior changes.

Inspired by Grant Sanderson's (3Blue1Brown) video on Bayes' theorem. [https://youtu.be/HZGCoVF3YvM?si=MNDsbUa6a30rxe6d](https://youtu.be/HZGCoVF3YvM?si=MNDsbUa6a30rxe6d)
