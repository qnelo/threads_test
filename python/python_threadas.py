import time
import threading
import multiprocessing

def countdown(number):
    while number > 0:
        number -=1

def test(count, process_number, threads, normal_mode):
    start = time.time()

    process_array = []

    if normal_mode:
        countdown(count)
        mode = "normal "
    else:
        for t in range(process_number):
            if threads:
                process_array.append(threading.Thread(target=countdown, args=(count,)))
            else:
                process_array.append(multiprocessing.Process(target=countdown, args=(count,)))
            process_array[t].start()
        
        for t in range(process_number):
            process_array[t].join()

        mode = "threads" if threads else "process"

    print('count:{} - number of {}:{} - time:{}'.format(count, mode, process_number, time.time() - start))

if __name__ == '__main__':
    count = 100000000
    max_process = 8

    test(count, 1, None, True)

    for process_number in range(1, max_process+1):
        test(count, process_number, False, False)
        test(count, process_number, True, False)
