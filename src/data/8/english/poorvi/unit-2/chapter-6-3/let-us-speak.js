export const meta = { title: "Let Us Speak", order: 6, tags: ["Solutions", "Speaking", "Pronunciation"] };

export const sections = [
  {
    roman: "I",
    instruction: "In the sentence 'That common good will present itself to you in many forms every day', the highlighted word 'present' (verb) is pronounced with the stress on the second syllable, while 'present' (noun) has the stress on the first. Read aloud the given words with the correct syllable stress according to the part of speech given in the brackets.",
    items: [
      {
        n: 1, type: "table",
        question: "Read aloud with the stress shown (capital letters = stressed syllable).",
        columns: ["Noun (stress on the first syllable)", "Verb (stress on the second syllable)"],
        rows: [
          ["PROduce (noun)", "proDUCE (verb)"],
          ["CONtract (noun)", "conTRACT (verb)"],
          ["PROject (noun)", "proJECT (verb)"],
          ["CONtent (noun)", "conTENT (verb)"],
          ["REfuse (noun)", "reFUSE (verb)"]
        ],
        answer: [
          ["PROduce (fruit and vegetables)", "proDUCE (to make or create)"],
          ["CONtract (an agreement)", "conTRACT (to become smaller)"],
          ["PROject (a piece of work)", "proJECT (to throw forward or show on a screen)"],
          ["CONtent (what is inside)", "conTENT (to satisfy)"],
          ["REfuse (rubbish)", "reFUSE (to say no)"]
        ]
      }
    ]
  },
  {
    roman: "II",
    instruction: "In 'treasure' and 'pleasure', -sure has a 'zhuh' sound. Some words that end in -sure have a 'shuh' sound, as in 'pressure'. Read aloud the words below with the 'shuh' or 'zhuh' sound.",
    items: [
      {
        n: 1, type: "table",
        wordBox: ["measure", "leisure", "reassure", "enclosure", "exposure", "ensure", "seizure", "fissure", "composure", "unsure"],
        question: "Sort the words by sound.",
        columns: ["'zhuh' sound", "'shuh' sound"],
        rows: [["______", "______"]],
        answer: [[
          "measure, leisure, enclosure, exposure, seizure, composure",
          "reassure, ensure, fissure, unsure"
        ]]
      }
    ]
  },
  {
    roman: "III",
    instruction: "Pausing and chunking are techniques used when speaking to organise information for the listener. Speakers can split what they say into smaller segments to convey ideas or emphasise key points. Read the lines of the poem 'Don't Quit' by Edgar Albert Guest once again, taking a shorter pause (/) or a longer pause (//). Notice which version is easier for a listener to follow and understand. Then chunk the second poem and read it aloud.",
    items: [
      {
        n: 1, type: "activity",
        question: "Read the lines of 'Don't Quit' with pauses, and chunk the second poem with / and //.",
        answer: [
          "*(Speaking activity - how to do it.)*",
          "- Put a short pause (/) where a phrase ends - after a clause or a group of words that belongs together (for example, between 'When things go wrong' and 'as they sometimes will') - and a long pause (//) at the end of each line or sentence.",
          "- The chunked version is easier to follow because the listener gets one idea at a time and has time to understand it.",
          "- For the second poem, mark a long pause (//) at the end of each line, and short pauses (/) before words such as 'with', 'as', 'and', 'though' and after commas or dashes. Then read it aloud and check that each chunk makes sense on its own.",
          "- Listen to a song version of 'Don't Quit' in Hindi or in your own language and share it with your class."
        ]
      }
    ]
  }
];
