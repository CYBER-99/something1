const content = document.getElementById("content");
const progress = document.getElementById("progress");

let step = 0;

/*
  IMPORTANT:
  This version uses:
  - Longer text blocks
  - Clear emotional progression
  - Fewer buttons
  - Very obvious wording changes
*/

const steps = [

  // 0 — Opening
  {
    html: `
      <h1>Will you be my Valentine?</h1>
      <p>
        I know this sounds simple…<br>
        especially when we’ve already been together for a year.
      </p>
      <button onclick="next()">Yes</button>
      <button id="noBtn">No</button>
    `,
    onLoad: () => {
      const noBtn = document.getElementById("noBtn");
      const move = () => {
        noBtn.style.position = "relative";
        noBtn.style.left = Math.random() * 140 - 70 + "px";
      };
      noBtn.addEventListener("mouseover", move);
      noBtn.addEventListener("touchstart", move);
    }
  },

  // 1 — Callback to old question
  {
    html: `
      <p>
        Do you remember when I once asked you…
      </p>
      <h1>
        “Do you really deserve this new me?”
      </h1>
      <button onclick="next()">I remember</button>
    `
  },

  // 2 — Reveal
  {
    html: `
      <p>
        Back then, I said I didn’t have an answer.<br>
        I told you I was relying on you for it.
      </p>
      <button onclick="next()">Go on</button>
    `
  },

  // 3 — Truth
  {
    html: `
      <p>
        But the truth is…<br>
        I already knew the answer.
      </p>
      <button onclick="next()">Tell me</button>
    `
  },

  // 4 — Validation
  {
    html: `
      <h1>You deserved it.</h1>
      <p>
        And honestly… you deserve even more.
      </p>
      <button onclick="next()">Still here</button>
    `
  },

  // 5 — Overthinking explained
  {
    html: `
      <p>
        I overthink a lot.<br>
        I get rude sometimes.<br>
        I suspect things I shouldn’t.
      </p>
      <button onclick="next()">I know</button>
    `
  },

  // 6 — Reason
  {
    html: `
      <p>
        That’s because you’re the only one<br>
        who actually cares when I show how I feel.
      </p>
      <button onclick="next()">Still here</button>
    `
  },

  // 7 — World vs her
  {
    html: `
      <p>
        The world ignored my existence more times than I can count.<br>
        And slowly… I stopped calling it my world.
      </p>
      <button onclick="next()">And then?</button>
    `
  },

  // 8 — Core line (IMPORTANT)
  {
    html: `
      <h1>
        I think you became my world.
      </h1>
      <p>
        Because you cared.
      </p>
      <button onclick="next()">…</button>
    `
  },

  // 9 — Online relationship truth
  {
    html: `
      <p>
        People don’t believe online relationships last.<br>
        Even I wasn’t sure at first.
      </p>
      <button onclick="next()">But now?</button>
    `
  },

  // 10 — Definition of love
  {
    html: `
      <p>
        Love isn’t about being physically there.<br>
        It’s about choosing each other.<br>
        Every single day.
      </p>
      <button onclick="next()">I agree</button>
    `
  },

  // 11 — Gratitude
  {
    html: `
      <p>
        Thank you for choosing me<br>
        when I really needed someone.
      </p>
      <button onclick="next()">…</button>
    `
  },

  // 12 — Final ask
  {
    html: `
      <h1>So I’ll ask again.</h1>
      <p>
        Will you be my Valentine?
      </p>
      <button onclick="next()">Yes</button>
    `
  },

  // 13 — Ending
  {
    html: `
      <h1>Till our last breath.</h1>
      <p>
        Thank you for choosing me.<br>
        Always.
      </p>
      <div class="footer">Built for one heart only.</div>
    `
  }

];

// Progress dots
function renderProgress() {
  progress.innerHTML = "";
  steps.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i <= step ? " active" : "");
    progress.appendChild(dot);
  });
}

function render() {
  content.innerHTML = steps[step].html;
  renderProgress();
  if (steps[step].onLoad) steps[step].onLoad();
}

function next() {
  step++;
  render();
}

// Initial render
render();
