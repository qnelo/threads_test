# Threads

## Objetivo

Este repositorio contiene codigo en `javascript` y `python` con el objetivo de comprobar las ventajas de ocupar multiples procesos para ejecuciones en paralelo.

## Introducción

Los lenguajes de programación permiten la concurrencia de procesos, cada uno tiene su particularidad para lograrlo, y a la vez tienen también la capacidad de lograr concurrencia mediante paralelismo.

### Concurrencia

Es la capacidad que dos o mas tareas se ejecuten en un periodo de tiempo, ocupando uno o mas hilos de procesamiento, las tareas se ejecutan de forma independiente y no necesariamente empiezan o terminan a la vez.

Se puede lograr concurrencia incluiso con un solo hilo de CPU el cual divide el tiempo de procesamientos de las tareas para avanzar en una, dejarla pausada y seguir con otra, hasta que luego de varias diviciones de tiempo entre las tareas logra terminar con todas. Cuando los intervalos de tiempo son pequeños puede parecer que los procesos son en paralelo.

### Paralelismo

Es una de las tecnicas ocupadas para permitir la concurrencia, una forma de paralelismo es tener más de una CPU trabajando en diferentes tareas a la vez, por lo tanto las tareas se ejecutan simultaneamente.

## Javascript

Javascript corre en un solo proceso, es "single thread" y consigue concurrencia gracias a la implementación del [Event Loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop). Pero si se quiere hacer uso de multiples hilos, gracias a Node desde la version 12 se puede usar el modulo [worker_threads](https://nodejs.org/docs/latest-v12.x/api/worker_threads.html) el cual permite utilizar hilos de ejecucion en paralelo para ejecutar codigo en javascript. Una muy buena explicación se consigue visitando el siguiente [sitio](https://nodesource.com/blog/worker-threads-nodejs/).

## Python