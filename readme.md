Playing with TypeScript again.

Idea is to convert comma separated string (or a string with a few lines) 
into nice, formatted list of separate items.

I actully wrote this progam under Windows long time ago and use it for coding purpuses. 
I'm planning to rewrite it with WPF. 
But for now, let's try TypeScript, should work everywhere - just download locally on your PC.

Funny that many TypeScript errors, explained on Stack Overflow as "Angular" errors.. :)
But this is not an Angular example. Pure HTML + TypeScript. 

thank you,
Sam Klok (Sergiy Klokov)

Some articles which been used:
https://stackoverflow.com/questions/43218680/document-getelementbyidid-may-be-null

https://stackoverflow.com/questions/14727044/what-is-the-difference-between-types-string-and-string


Pluralsight tutorial video which been used:
TypeScript: Getting Started By Brice Wilson


Some tips:
1. To compile TypeScript file to JavaScript use command:
tsc

1.1 Don't use command below, 
because it will not use configuration and will not put .js file in the right folder:
tsc convertor.ts

2. install TypeScript if needed:
npm install -g typescript
tsc --version
tsc

and compile by command:
npx tsc convertor.ts --outDir js