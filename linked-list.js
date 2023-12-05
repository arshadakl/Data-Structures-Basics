class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size===0
    }


    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next=node
        }
        this.size++
    }
    print(){
        if(this.isEmpty()){
            console.log("List is Empty");
            return
        }
        let curr = this.head
        let value = ""
        while(curr){
            value+=`${curr.value} `
            curr=curr.next
        }
        console.log(value);
    }
    insert(value,index){
        const node  = new Node(value)
        if(index<0 || index > this.size){
            return
        }
        if(index===0){
            this.prepend(value)
        }else{
            let prev = this.head
            for(let i=0 ; i<index-1 ; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    
    removeByindex(index){
        if(index<0 || index>this.size){
            return
        }

        if(index===0){
            let removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            let removeNode = prev.next
            prev.next = removeNode.next
            this.size--
        }
    }

    removeByValue(value){
        if(this.isEmpty()){
            return
        }
        if(this.head.value===value){
            this.head = this.head.next
            this.size++
            return
        }else{
            let prev = this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return value
            }
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }

        if(this.head.value==value){
            return 0
        }else{
            let i=0
            let curr= this.head
            while(curr){
                if(curr.value===value){
                    return i
                }
                curr= curr.next
                i++
            }
            return -1
        }
    }
    reverse(){
        let pre =null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = pre
            pre = curr
            curr = next
        }
        this.head = pre
    }

}

const list = new linkedList()
list.prepend(10)
list.prepend(80)
list.prepend(90)
list.prepend(60)
list.append(50)
list.append(880)
list.print()
list.insert(464,5)
// list.removeByindex(0)
list.removeByValue(50)
console.log(list.search(60));
list.print()
list.reverse()
list.print()