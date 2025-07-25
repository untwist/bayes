# Bayes Interactive

This silly little web app visualizes **Bayes' theorem** through a set of sliders and a diagram. The application allows you to manipulate the prior probability of a hypothesis and the likelihood of evidence in both the true and false cases. As you adjust the sliders the graphic and the computed posterior probability update instantly. The goal is to help my students build intuition for how beliefs are updated when new evidence appears.

The notation in the app follows standard probability conventions. For example,
`P(E | H)` is read as "the probability of the evidence `E` assuming the
hypothesis `H` is true." Likewise, `P(E | ¬H)` represents the probability of the
evidence when the hypothesis does not hold; the symbol `¬` simply means
"not." 

These quantities feed into Bayes' theorem to compute the updated belief
`P(H | E)`.
![Bayes Theorem Formula v2](https://github.com/user-attachments/assets/8dd4f1d5-a2ba-429c-bba8-a5af5d2d428e)

[<img width="1000" height="1000" alt="mens-t-shirt-regular-smoke-front-back-1" src="https://github.com/user-attachments/assets/145168a0-7962-44fc-8536-e78bde6310c4" />](https://toddbrous.threadless.com/designs/bayes-theorem-black/mens/t-shirt/regular?variation=front-back)
[You can buy this T-shirt from my Threadless Store!](https://toddbrous.threadless.com/designs/bayes-theorem-black/mens/t-shirt/regular?variation=front-back)


## Quick start

[Try it out!](https://untwist.github.io/bayes/bayes_interactive.html)

or...
Clone repository, open `bayes_interactive.html` in your browser.

## Planned tutorials and scenarios

The repository will gradually include short tutorials illustrating classical uses of Bayes' theorem, such as:

- Analysing a medical test's reliability when the disease is rare.
- Distinguishing between biased and fair coins using repeated tosses.

These scenarios will highlight how the sliders correspond to the quantities in Bayes' formula and how the posterior changes.

Inspired by Grant Sanderson's (3Blue1Brown) video on Bayes' theorem. [https://youtu.be/HZGCoVF3YvM?si=MNDsbUa6a30rxe6d](https://youtu.be/HZGCoVF3YvM?si=MNDsbUa6a30rxe6d)
