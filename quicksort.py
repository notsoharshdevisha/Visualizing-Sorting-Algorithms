def quicksort(start, end, array):
    if (start < end):
        loc = partition(start, end, array)
        quicksort(start, loc-1, array)
        quicksort(loc+1, end, array)

def partition(start, end, array):
    pivot_index = start
    pivot = array[pivot_index]
    
    while (start < end):
        while (array[start] <= pivot) and (start<len(array)-1):
            start += 1
        
        while (array[end] > pivot) and (end > 0):
            end -= 1

        if (start < end):
            array[start], array[end] = array[end], array[start]

    array[end], array[pivot_index] = array[pivot_index], array[end]
    return end

if __name__ == '__main__': 
    array = [4545,345,3,24,524,524,5]
    print(array)
    quicksort(0, len(array)-1, array)
    print(array)
