<ul class="step-progress" style={{
                        right: '0px',
                        position: 'relative'
                    }}>
                        <li className={b1?"active":""} onClick={()=>toggle(this,this.state,{key:'b1',value:true})} style={{cursor:'pointer',zIndex:1}}></li>
                        <li className={b2?"active":""} onClick={()=>toggle(this,this.state,{key:'b2',value:true})} style={{cursor:'pointer',zIndex:1}}></li>
                        <li className={b3?"active":""} onClick={()=>toggle(this,this.state,{key:'b3',value:true})} style={{cursor:'pointer',zIndex:1}}></li>
                        <li className={b4?"active":""} onClick={()=>toggle(this,this.state,{key:'b4',value:true})} style={{cursor:'pointer',zIndex:1}}></li>

                    </ul>