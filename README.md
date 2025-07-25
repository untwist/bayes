# Bayes Interactive

This web app visualizes **Bayes' theorem** through a set of sliders and an SVG diagram. The application allows you to manipulate the prior probability of a hypothesis and the likelihood of evidence in both the true and false cases. As you adjust the sliders the graphic and the computed posterior probability update instantly. The goal is to help students build intuition for how beliefs are updated when new evidence appears.

The notation in the app follows standard probability conventions. For example,
`P(E | H)` is read as "the probability of the evidence `E` assuming the
hypothesis `H` is true." Likewise, `P(E | ¬H)` represents the probability of the
evidence when the hypothesis does not hold&mdash;the symbol `¬` simply means
"not." These quantities feed into Bayes' theorem to compute the updated belief
`P(H | E)`.

## Quick start

Clone repository, open `bayes_interactive.html` in your browser.

## Planned tutorials and scenarios

The repository will gradually include short tutorials illustrating classical uses of Bayes' theorem, such as:

- Analysing a medical test's reliability when the disease is rare.
- Distinguishing between biased and fair coins using repeated tosses.

These scenarios will highlight how the sliders correspond to the quantities in Bayes' formula and how the posterior changes.
