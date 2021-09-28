array = [3, 2, 1]

def merg_sort(array):
    if (len(array) <= 1): 
        return
    aux_array = array.copy()
    split(0, len(array)-1, array, aux_array)
    
def split(startidx, endidx, array, aux_array):
    print(aux_array[startidx:endidx+1])
    if (startidx == endidx):
        return
#    print('split called')
    middleidx = (startidx + endidx) // 2
#    print(f's{startidx} m{middleidx} e{endidx}')
    split(startidx, middleidx, array, aux_array)
    split(middleidx+1, endidx, array, aux_array)
    merge(startidx, middleidx, endidx, array, aux_array)

def merge(startidx, middleidx, endidx, array, aux_array):
#    print('merge called')
    i = startidx
    k = startidx
    j = middleidx+1
#    print(f'i{startidx} j{startidx} k{startidx}')

    while ((i <= middleidx) and (j <= endidx)):
        if (aux_array[i] <= aux_array[j]):
            array[k] = aux_array[i]
            k+=1
            i+=1
        else:
            array[k] = aux_array[j]
            k+=1
            j+=1
    
    while (i<=middleidx):
        array[k] = aux_array[i]
        k+=1
        i+=1

    while (j<=endidx):
        array[k] = aux_array[j]
        k+=1
        j+=1

print(array)
merg_sort(array) 
print(array)
