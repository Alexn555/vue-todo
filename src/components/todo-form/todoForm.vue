<template>
   <transition name="modal-fade">
     <div class="modal-backdrop">
        <div class="modal"
             role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription">
            <header class="modal-header" id="modalTitle">
                <slot name="header">
                    <h3>{{formTitle}}</h3>
                    <button type="button"
                            class="btn-close"
                            @click="close"
                            aria-label="Close modal">
                        x
                    </button>
                </slot>
            </header>
            <section class="modal-body" id="modalDescription">
                <slot name="body" class="form-body">
                    <ul>
                        <li class="form-label">
                            <span>Title</span>
                            <input v-model="title" class="form-control">
                        </li>
                        <li class="form-label">
                            <span>Description</span>
                                <textarea v-model="description" rows="1" class="form-control">
                            </textarea>
                        </li>
                        <li class="form-label">
                            <span>Todo date</span>
                            <masked-input v-model="todoDate" mask="11/11/1111" placeholder="dd/mm/year" />
                        </li>
                        <li class="form-label">
                            <span>Priority</span>
                            <input type="radio" id="low" value="low" v-model="priorityLevel">
                            <label for="low">Low</label>

                            <input type="radio" id="medium" value="medium" v-model="priorityLevel">
                            <label for="medium">Medium</label>

                            <input type="radio" id="high" value="high" v-model="priorityLevel">
                            <label for="high">High</label>
                        </li>
                    </ul>
                </slot>
            </section>
            <footer class="modal-footer">
                <slot name="footer" >
                    <button type="button" class="btn-green" aria-label="Close modal"
                            @click="saveTodo()">
                        Save
                    </button>
                </slot>
            </footer>
        </div>
    </div>
   </transition>
</template>

<script lang="js" src="./todoForm.js"></script>
<style lang="scss" src="./todoForm.scss"></style>
