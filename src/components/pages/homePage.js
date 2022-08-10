import styles from './homePage.module.css';

const HomePage = () => (
  <div className={styles.homePage}>
    <h1>Welcome to our home page</h1>
    <p>
      Math has a certain logic to it. If you use it to accurately describe a situation,
      sometimes you can predict the inevitable — for instance, the moment an eclipse will
      take place — centuries in advance. To those unfamiliar with the math behind the
      prediction, this outcome might seem like magic. Indeed, the science fiction author
      Arthur C. Clarke famously wrote, “Any sufficiently advanced technology is
      indistinguishable from magic.
    </p>
    <p>
      In today’s Insights puzzle we’ll explore four
      examples of mathematical magic that can seem, at first glance, like mind reading.
      Just like stage magic, these examples can leave you wondering, “How did they
      know that?
    </p>
    <p>
      Many of us have experienced this as children. We are asked by a friend to think of a
      certain number without revealing it. We are then asked to do a series of simple
      arithmetical operations on it. Finally, our friend astonishes us by telling us our
      secret number. So how is this done?
    </p>

    <p>
      This magic trick is designed for a child who can do multiplication reliably
      (get an assistant to help them if not). Ask your own little Alice (or Bob) to think
      of a three-digit number without telling you what it is. Then tell them that you will
      reveal the number by producing two copies of it side by side! First ask the child to
      multiply their number by 7. Then ask them to multiply the answer by 11. Finally — and
      at this point you can add feigned concentration and appropriate magical phrases — ask
      them to multiply the second answer by 13.
    </p>

    <p>
      The content on this page was written by
      <span className={styles.author}><a href="https://www.quantamagazine.org/how-do-math-magicians-know-your-number-20220504/"> Pradeep Mutalik </a></span>
    </p>
  </div>
);

export default HomePage;
