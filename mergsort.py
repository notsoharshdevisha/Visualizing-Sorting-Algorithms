def merge_sort(array, start, end):
    aux_array = array.copy()
    if (len(array) == 0 or len(array) == 1):
        return
    split(array, start, end, aux_array) 

def split(array, start, end, aux_array):
    middle = (start + end) // 2
#    print(start, middle, end)
    if (start == end):
        return
    split(array, start, middle, aux_array) 
    split(array, middle + 1, end, aux_array)
    merge(array, start, middle, end, aux_array)

def merge(array, start, middle,  end, aux_array):
    i = start
    k = start
    j = middle + 1
    
    while(i <= middle and j <= end):
        if (aux_array[i] < aux_array[j]):
            array[k] = aux_array[i]
            k+=1
            i+=1
        else:
            array[k] = aux_array[j]
            k+=1
            j+=1

    while (i <= middle):
        array[k] = aux_array[i]
        k+=1
        i+=1

    while (j <= end):
        array[k] = aux_array[j]
        k+=1
        j+=1


if __name__ == '__main__':
    array = [3, 2, 1]
    merge_sort(array, 0, len(array)-1)
    print(array)
