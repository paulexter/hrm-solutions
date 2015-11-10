callback({
  "levelNumber": 28,
  "size": 96,
  "steps": 53,
  "successRatio": 0.03,
  "type": "specific",
  "author": "Mygod",
  "hash": "356462d378369f6949eb3583e3ee1b5c",
  "path": "28-Three-Sort-34.78/96.52.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 28-Three-Sort - SIZE 96/34 - SPEED 52/78 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- The input SHALL consists of 4 tuples, and the first 3 should be in reverse\r\n-- order, the 2nd should be in order.\r\n-- Heavily based on 62.73-AlanDeSmet.asm.\r\n\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    INBOX   \r\n    OUTBOX\r\n    COPYFROM 1\r\n    OUTBOX\r\n    COPYFROM 0\r\n    OUTBOX\r\n    INBOX\r\n    OUTBOX\r\n    INBOX\r\n    OUTBOX\r\n    INBOX\r\n    OUTBOX\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    i\r\n    COMMENT  1\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    h\r\n    COMMENT  7\r\n    ADD      0\r\n    COPYTO   2\r\n    SUB      1\r\n    JUMPN    g\r\n    COMMENT  9\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    JUMP     a\r\ng:\r\n    COMMENT  8\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    JUMP     a\r\nh:\r\n    COMMENT  6\r\n    ADD      0\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    JUMP     a\r\ni:\r\n    COMMENT  0\r\n    INBOX   \r\n    SUB      1\r\n    JUMPN    k\r\n    COMMENT  3\r\n    ADD      1\r\n    COPYTO   2\r\n    SUB      0\r\n    JUMPN    j\r\n    COMMENT  4\r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    JUMP     a\r\nj:\r\n    COMMENT  5\r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    JUMP     a\r\nk:\r\n    COMMENT  2\r\n    ADD      1\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\na:\r\n    INBOX   \r\n    COPYTO   0\r\n    INBOX   \r\n    COPYTO   1\r\n    SUB      0\r\n    JUMPN    i\r\n    COMMENT  1\r\n    INBOX   \r\n    SUB      0\r\n    JUMPN    h\r\n    COMMENT  7\r\n    ADD      0\r\n    COPYTO   2\r\n    SUB      1\r\n    JUMPN    g\r\n    COMMENT  9\r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n\r\n\r\nDEFINE COMMENT 0\r\neJzTYmBgWM6jGJHBE+L3hNfaZj5/rtFNwT4ZAdFSLm7x79zHJPby/5aZrVoul6mfozQ/DKic4SW3kdlu\r\nGSMzELtD/6TEASNvKRXbFJ1HtloGi2z1jB2NpgeA5D76t4kphDmL9MWwiDIl+ssyJd5TvxD92uBdgLXN\r\ns+Amx3lhPJ73wqYH6AY+imh335B03bEwGaQvP8Bd3CDAX3anz3vjf15tLq4es4MZRsEoGAU0AQD5tTW8\r\n;\r\n\r\nDEFINE COMMENT 1\r\neJxTY2Bg2MNiL5jBYy8Yz39UVFaARzpWYLrSEt7F2mbsz3WFRTL1z4kWmvKKfbcUEG1yfMg32VePSzKo\r\nlF0yCKiVwYLtrLQFm7MTiL1S2V82RVVQ7o+xmWWD0V7bEO2zniDxaVqTfUH0fbsQP2bPDWy23t+5rX04\r\nJKx91HT3eOsZ7/FucrT2aXMBqeF2s7Zx8DKzZBgFo2AU0AUAAI1GJdE;\r\n\r\nDEFINE COMMENT 2\r\neJwzZmBgKOCcH/aMx8xSVPio6EQRd/HdMvb22+S04oBSDIv4WJw3KrA4g9gTdK4pbrB4pPXG8rXBUYNb\r\nQX66atEg8X4XDokpUe7iHPEnJdriz0onheYaffPdYbXTh8FBNpzBISSqzi4kisdTIUw2dKP/6zhb7w1J\r\noU6laSC9rR6zVQ96LtZm9Fpj6Ow5PQAkdr1gupJZ7Xtj+bxHESB+1WQe6X8Tz0pHtafoKLeUWjxpdnZK\r\nbvH2iG2b7CvQPTu4ZlJMyLYpEYEMo2AUjAKSAQCM20K9;\r\n\r\nDEFINE COMMENT 3\r\neJzzZ2BgMObg8TTg1DNeznNS4poAAxi8EmRgaJdQ1GqR3GCyW+asJ0hsE8di7ZPij7RA7GlaR0Un6BwV\r\ndTE8K21p6i8baz9bdb5dguYXMz3jP8Zmlv+N9tqC1OUHFLK3JGxgY0gy47ZPOijUksAhMS1SVNE9PkLZ\r\nJllW3SpFy6AmudCUKbHS+l6Yt4d2EA/YrpVBVnyqISclFMI+m4H4u2VOlkwRPlnykC+kZjlPTNNL7tIp\r\nGTx1s57wui8UFb60ol0iZJWRwuSVILV1xk35epbOBfVe/RW23pOr/3lNr9tgwbEI7O7IDUn7ktbEb0hf\r\nE78ia0PSi6y92TmZ7sWNibMbP6SndrzKXNP7KrNw4of0PzPsk9wXdsZ5L0kP5l0K0hseuSVVNGpnxuWo\r\nkyWXo35MZRgFo2AYAAB4sm8P;\r\n\r\nDEFINE COMMENT 4\r\neJyzY2BguCzsLv6Et00sl6tLsoAzRKGAc42hHlednTZ3m0sq71nPcCFRf27xa/6NUiF+QOUMT1XcxWU0\r\n3MX/GEuqFFjEqH0yV9SqM8416tC3t+/Wc3ft0z3pBlJ3xSkhPMCly73VY7F2kf9BodzAkxK3w3dYXY66\r\nFwqSZ/Y86BAfdtBhWmSdHYi/L8ld/EcKh8St/AjlQxXzNQ5VPNc9Wq5nrJjb5wWS12zayx/UtYPHaYIV\r\n387JB4VKpp6UMJp2TbF8ymLtSV0r9Dz6MvV/TzIy+zG5zm7fRA63iI57odqNCeEgvanNDELKLUdFF7Vc\r\nU1za7O3BMApGwSgAAwDua1T3;\r\n\r\nDEFINE COMMENT 5\r\neJwzYWBg+MNyK6iAM0FzEd9BoVgBd/HLwvfUe8Tq7P5Kv44DSjMYc7i7+oq5u4LYSmohCvy61xTv2+Ua\r\nHTKUDQWJTYsMUXgWfE1xi5+iloXvCr0qn/fGVT57bdcEzg6eFpmb4JS4IQmkLifznnpt1WJtvYbXBvsr\r\n+7y8S+eHBRaviZ9auCYeJC/c5SyybvpBofAFbWITF3lLCS2SVBFfoKilNXOLufgCa5urC+rsri5ocxFf\r\nwOMpP1cyyGKKWvSxvsJkkN5jfYJytpNE/RlGwSgYBSQBALG9RkE;\r\n\r\nDEFINE COMMENT 6\r\neJyzZWBguMf/nZtZ6g/fZ/km4dVK7uIvlHmkl6lcklumMl/jhbKarqn8BhNmqUJTU/k/NkYKbS6FCn1e\r\n2+RmB1fKzg/jkNCKy+XSSwQawzBTsE1sPv9e2/n8Ad4zBZdEgsRYJV8bXBQpNAWxLU39ZVVsZdUDXPSM\r\nLzobmRlatLkcNbjmD5Kr8tGKexC6xXxa5HQloeijov4xHBKb0yIC12VsSALJPw456SYQc9azLonHE8RP\r\ny76l4l36SMu4Ts/Yuvq7ZVwexJzfk9rEjvXxSF/rkFW/05ZrJNfm7HSnjcczoHuy75H+Sz4WU066MYyC\r\nUTAK4AAAz6hPqA;\r\n\r\nDEFINE COMMENT 7\r\neJxzYWBgWM/JI80tflKiUcpbap90n8xf6Qhle+kUHV6xDSYzBT+bMUvtsKqX/mNjK+PuWi8d4H1ONCZk\r\nOc+90O1sjyKA2hlWcQvKveQ+6gxiT9CZLM+lH6G8yVxR671Fio6epZbBJvPPZt9Nd1hN1u7zAqnhdnse\r\n7eF+1rPKR1Llp0+fzBa/JuGP/oXs7wLes2YF8UgvD+5yB6lz8LK3L/K3tgGxT4qbTfUXLZwYK1A48Qmv\r\n2dR3nCGrDDhX7FjPqbf3GU/ZIS9x+5P20nUnQGrZDTZMWGXFMEfNpm1Bg5HsRpAYn2vVUVvvtgW5gTFN\r\nWUGzG58Fp3bEhx2cMy8sdw9I/qeP95LUEO8lDKNgFIwwAACV3Fr9;\r\n\r\nDEFINE COMMENT 8\r\neJyzY2BgyOBpE4sSZBD6oFAnkKPEIKSlzCKqpSwot1Fhvoa5XKb+X+lco5PiG0x2ym4wMZU3MiuRZ3He\r\nJnfW86DUvVBhkczYAs4VMUBjGJT5TkrE83NIxAp0SUoIyYaCxPx0/WUdjQTlsq0kVVZYx6ip2Shqqdmo\r\n6WZYZ+rbGTM4NBu6u4LU5QayiJ5xlVQJcFmsLejy3viM615bW+9r/gYBCeGqIQnh8WEQ83hjb6kci7+n\r\nnpadoqOY+9ogMfe98ae0Pzb2SRxuIPmzJSF+hyoy9f9Xhij8qRKUW9tQaf28qc/rTltqFEj+aHmf16Y6\r\nHk+GUTAKRgEYAACnGUm5;\r\n\r\nDEFINE COMMENT 9\r\neJyzZGBgOCnuLXVRhEf6I8d8jW9smfrb2TaYFHHU2WVx83jOERD1Z5CeHgBUxnBX/Z56pOY99TpjPeMV\r\n1t8tV1gzOPw3CvEDyXG6n5Vu9fCWUg7lkQ6J8pcVip4sHxQ9W/VxSK7RxGhrG5/YJscTcSF+XnEJ4f4x\r\nK2JmRuQmFPm/TwTptfZJ0Nzuq2WgGzjZVyP4UQRI7G3GYu1l2Sk6X2r/2HyvaXK8VBQTAhKXa8uMndNm\r\nby/RMV9DuOukRH+3uzh3L4cERx+P9IdpQDfPFPRZNkstGqR2SieDw7YpBx0YRsEoGAU4AQBZCks1;\r\n\r\nDEFINE LABEL 0\r\neJzjZ2BgeJRz7nJkgd5entKd0wrqSy3eNOy1vdeqlzirfWdGT8/zzn0Tzy3Nn+58Rmtm/xWgcgb2cud5\r\nfD1NcxlGwSgYBUMeAACrzxtW;\r\n\r\nDEFINE LABEL 1\r\neJyTZ2BgWJZdaR2dv8X8fb2R2ZkeBgeHid4eFlNuBZVMTY36PLUpf8tUjpKdk6fXHetb0j6nbcOE9fWf\r\nJwkWf570v/LzJL0Gs6m+PV2LW/qnr9k3ccWOfxML9zNPsD8p3HXyQkaTz6W0bN7LP1LczwOtYbhU5Owk\r\nWPxj6tVCte2RBQdPMYyCUTAKBhwAAK7aPPU;\r\n\r\nDEFINE LABEL 2\r\neJyTYGBg4OirtO7qNTIL6E7ReV9/UqKipk3saHmb2Ox8f1nz1EdabfGFptMijzo/C34UsTLoc8rKII4S\r\nici2BQxJDKc2p/FejsubfJ2xcvJ1w/pzlx+2OJ/h6NPadaR/ydZ/E0NWMYyCUTAKBjUAAI5fKy4;\r\n\r\n"
});