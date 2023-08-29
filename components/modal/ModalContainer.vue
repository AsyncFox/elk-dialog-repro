<script setup lang="ts">
import type { ConfirmDialogChoice } from '~/types'
import {
  isConfirmDialogOpen,
  isIntroDialogOpen,
} from '~/composables/dialog'

// TODO: temporary, await for keybind system
// open search panel
// listen to ctrl+k on windows/linux or cmd+k on mac
// open command panel
// listen to ctrl+/ on windows/linux or cmd+/ on mac
// or shift+ctrl+k on windows/linux or shift+cmd+k on mac
// useEventListener('keydown', (e: KeyboardEvent) => {
//   if ((e.key === 'k' || e.key === 'л') && (isMac.value ? e.metaKey : e.ctrlKey)) {
//     e.preventDefault()
//     openCommandPanel(e.shiftKey)
//   }
//   if ((e.key === '/' || e.key === ',') && (isMac.value ? e.metaKey : e.ctrlKey)) {
//     e.preventDefault()
//     openCommandPanel(true)
//   }
// })

function handleConfirmChoice(choice: ConfirmDialogChoice) {
  confirmDialogChoice.value = choice
  isConfirmDialogOpen.value = false
}
</script>

<template>
  <template v-if="isHydrated">
    <!-- <ModalDialog v-model="isPreviewHelpOpen" keep-alive max-w-125>
      <HelpPreview @close="closePreviewHelp()" />
    </ModalDialog>
    <ModalDialog v-model="isCommandPanelOpen" max-w-fit flex>
      <CommandPanel @close="closeCommandPanel()" />
    </ModalDialog> -->
    <ModalDialog v-model="isConfirmDialogOpen" py-4 px-8 max-w-125>
      <ModalConfirm v-if="confirmDialogLabel" v-bind="confirmDialogLabel" @choice="handleConfirmChoice" />
    </ModalDialog>
    <ModalDialog v-model="isIntroDialogOpen" py-4 px-8 max-w-125>
      <ModalIntro />
    </ModalDialog>
    <!-- <ModalDialog v-model="isErrorDialogOpen" py-4 px-8 max-w-125>
      <ModalError v-if="errorDialogData" v-bind="errorDialogData" />
    </ModalDialog>
    <ModalDialog v-model="isKeyboardShortcutsDialogOpen" max-w-full sm:max-w-140 md:max-w-170 lg:max-w-220 md:min-w-160>
      <MagickeysKeyboardShortcuts @close="closeKeyboardShortcuts()" />
    </ModalDialog> -->
  </template>
</template>
