+++
title = "10 Underrated Linux commands"
date = 2021-10-12
+++

Linux has tons of nifty commands, here's 10 super heroic Linux commands that you probably need to add to your toolbox.

1. Redo last command but with sudo

```sudo !!```

2. Open an editor to run a command

Ctrl+x+e

3. Create a super fast ram disk

```
mkdir -p /mnt/ram

mount -t tmpfs tmpfs /mnt/ram -o size=8192M
```

4. Messed up a long command?

`fc` will open up your last command in editor.

5. netstat: command not found ?

`ss` Socket statistics, a substitue of netstat

6. Quickly create folders

```
mkdir -p folder/{sub1,sub2}/{sub1,sub2,sub3}

mkdir -p folder/{1..100}/{1..100}
```
Also works with number ranges

7. Intercept stdout and log to file

```
cat file | tee -a log | cat > /dev/null
```

8. Solve simple mathematical calculations from terminal

`expr`

`expr 2 + 2`

9. Want to know history of last logged in users?

`last` This command comes to rescue here

10. exit terminal but leave all processes running

`disown -a && exit`

Bonus : `python -m http.server`

Creates a simple web page for the current working directory over port 8000.

