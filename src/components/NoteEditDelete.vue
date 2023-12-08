<template>
    <li>
        <div v-if="editing">
            <input
            type="text"
            v-model="editingNoteTitle"
            />
            <textarea
            v-model="editingNoteBody"></textarea>
        </div>
    </li>
</template>